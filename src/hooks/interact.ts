import { useRef, useEffect, useState, useCallback, CSSProperties } from 'react'
import interact from 'interactjs'

type Partial<T> = {
  [P in keyof T]?: T[P]
}

type dragMoveEvent = {
  dx: number
  dy: number
}

type resizeMoveEvent = {
  deltaRect: {
    left: number
    right: number
    top: number
    bottom: number
  }
  rect: {
    width: number
    height: number
  }
}

const initPosition = {
  width: 100,
  height: 100,
  x: 0,
  y: 0,
}

/**
 * HTML要素を動かせるようにする
 * 返り値で所得できるrefと、styleをそれぞれ対象となるHTML要素の
 * refとstyleに指定することで、そのHTML要素のリサイズと移動が可能になる
 * @param position HTML要素の初期座標と大きさ、指定されない場合はinitPositionで指定された値になる
 */
const useInteractJS = (
  position: Partial<typeof initPosition> = initPosition
): interactType => {
  const [_position, setPosition] = useState({
    ...initPosition,
    ...position,
  })
  const [isEnabled, setEnable] = useState(true)

  const interactRef = useRef(null)
  let { x, y, width, height } = _position

  const disable = () => {
    if (interactRef.current !== null) {
      interact(interactRef.current as unknown as HTMLElement).unset()
    }
  }

  const enable = useCallback(() => {
    if (interactRef.current !== null) {
      interact(interactRef.current as unknown as HTMLElement)
        .draggable({
          inertia: false,
        })
        .resizable({
          // resize from all edges and corners
          edges: { left: true, right: true, bottom: true, top: true },
          preserveAspectRatio: false,
          inertia: false,
        })
        .on('dragmove', (event: dragMoveEvent) => {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          x += event.dx
          // eslint-disable-next-line react-hooks/exhaustive-deps
          y += event.dy
          setPosition({
            width,
            height,
            x,
            y,
          })
        })
        .on('resizemove', (event: resizeMoveEvent) => {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          width = event.rect.width
          // eslint-disable-next-line react-hooks/exhaustive-deps
          height = event.rect.height
          x += event.deltaRect.left
          y += event.deltaRect.top
          setPosition({
            x,
            y,
            width,
            height,
          })
        })
        .on('tap', (event: any) => {
          // TODO: 選手名やポジションの設定ができるようにする
        })
    }
  }, [])

  useEffect(() => {
    if (isEnabled) {
      enable()
    } else {
      disable()
    }
  }, [enable, isEnabled])

  useEffect(() => disable, [])

  return {
    ref: interactRef,
    style: {
      transform: `translate3D(${_position.x}px, ${_position.y}px, 0)`,
      width: `${_position.width}px`,
      height: `${_position.height}px`,
      position: 'absolute' as CSSProperties['position'],
    },
    position: _position,
    isEnabled,
    enable: () => setEnable(true),
    disable: () => setEnable(false),
  }
}

export default useInteractJS
