import React, { useEffect, useRef } from 'react'
import Circle from 'components/circle'
import { useGetElementProperty } from 'hooks/elementProperty'

const Board: React.FC = () => {
  let w = 0
  let h = 0

  const canvasRef = useRef(null)
  const pitchRef = useRef(null)
  const { getElementProperty } = useGetElementProperty<HTMLDivElement>(pitchRef)

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    w = getElementProperty('width')
    h = getElementProperty('height')

    canvas.width = dpr * w
    canvas.height = dpr * h

    ctx.scale(dpr, dpr)

    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    return ctx
  }

  useEffect(() => {
    const ctx: CanvasRenderingContext2D = getContext()
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 8

    // 大枠
    ctx.strokeRect(w / 30, h / 40, w * 0.93, h * 0.93)

    // 中央線
    ctx.beginPath()
    ctx.moveTo(w / 2, h / 40)
    ctx.lineTo(w / 2, h * 0.96)
    ctx.closePath()
    ctx.stroke()

    // 中央円
    ctx.beginPath()
    ctx.arc(
      w / 2,
      h / 2,
      w / 20,
      (0 * Math.PI) / 180,
      (360 * Math.PI) / 180,
      false
    )
    ctx.closePath()
    ctx.stroke()

    // 左ゴール縦線
    ctx.beginPath()
    ctx.moveTo(w / 100, h * 0.554)
    ctx.lineTo(w / 100, h * 0.446)
    ctx.closePath()
    ctx.stroke()

    // 左ゴール横線(上)
    ctx.beginPath()
    ctx.moveTo(w / 100, h * 0.55)
    ctx.lineTo(w / 30, h * 0.55)
    ctx.closePath()
    ctx.stroke()

    // 左ゴール横線(下)
    ctx.beginPath()
    ctx.moveTo(w / 100, h * 0.45)
    ctx.lineTo(w / 30, h * 0.45)
    ctx.closePath()
    ctx.stroke()

    // 左ゴールエリア縦線
    ctx.beginPath()
    ctx.moveTo(w / 15, h * 0.654)
    ctx.lineTo(w / 15, h * 0.346)
    ctx.closePath()
    ctx.stroke()

    // 左ゴールエリア横線(上)
    ctx.beginPath()
    ctx.moveTo(w / 30, h * 0.65)
    ctx.lineTo(w / 15, h * 0.65)
    ctx.closePath()
    ctx.stroke()

    // 左ゴールエリア横線(下)
    ctx.beginPath()
    ctx.moveTo(w / 30, h * 0.35)
    ctx.lineTo(w / 15, h * 0.35)
    ctx.closePath()
    ctx.stroke()

    // 左ペナルティエリア縦線
    ctx.beginPath()
    ctx.moveTo(w / 8, h * 0.754)
    ctx.lineTo(w / 8, h * 0.246)
    ctx.closePath()
    ctx.stroke()

    // 左ペナルティエリア横線(上)
    ctx.beginPath()
    ctx.moveTo(w / 30, h * 0.75)
    ctx.lineTo(w / 8, h * 0.75)
    ctx.closePath()
    ctx.stroke()

    // 左ペナルティエリア横線(下)
    ctx.beginPath()
    ctx.moveTo(w / 30, h * 0.25)
    ctx.lineTo(w / 8, h * 0.25)
    ctx.closePath()
    ctx.stroke()

    // 左ペナルティアーク
    ctx.beginPath()
    ctx.arc(
      w / 8,
      h / 2,
      w / 30,
      (90 * Math.PI) / 180,
      (270 * Math.PI) / 180,
      true
    )
    ctx.closePath()
    ctx.stroke()

    // 左上コーナー
    ctx.beginPath()
    ctx.arc(
      w / 30,
      h / 40,
      w / 40,
      (0 * Math.PI) / 180,
      (90 * Math.PI) / 180,
      false
    )
    ctx.stroke()

    // 左下コーナー
    ctx.beginPath()
    ctx.arc(
      w / 30,
      h * 0.95,
      w / 40,
      (270 * Math.PI) / 180,
      (0 * Math.PI) / 180,
      false
    )
    ctx.stroke()

    // 右ゴール縦線
    ctx.beginPath()
    ctx.moveTo(w * 0.99, h * 0.554)
    ctx.lineTo(w * 0.99, h * 0.446)
    ctx.closePath()
    ctx.stroke()

    // 右ゴール横線(下)
    ctx.beginPath()
    ctx.moveTo(w * 0.99, h * 0.55)
    ctx.lineTo(w * 0.965, h * 0.55)
    ctx.closePath()
    ctx.stroke()

    // 右ゴール横線(上)
    ctx.beginPath()
    ctx.moveTo(w * 0.99, h * 0.45)
    ctx.lineTo(w * 0.965, h * 0.45)
    ctx.closePath()
    ctx.stroke()

    // 右ゴールエリア縦線
    ctx.beginPath()
    ctx.moveTo(w * 0.93, h * 0.654)
    ctx.lineTo(w * 0.93, h * 0.346)
    ctx.closePath()
    ctx.stroke()

    // 右ゴールエリア横線(下)
    ctx.beginPath()
    ctx.moveTo(w * 0.93, h * 0.65)
    ctx.lineTo(w * 0.96, h * 0.65)
    ctx.closePath()
    ctx.stroke()

    // 右ゴールエリア横線(上)
    ctx.beginPath()
    ctx.moveTo(w * 0.93, h * 0.35)
    ctx.lineTo(w * 0.96, h * 0.35)
    ctx.closePath()
    ctx.stroke()

    // 右ペナルティエリア縦線
    ctx.beginPath()
    ctx.moveTo(w * 0.87, h * 0.754)
    ctx.lineTo(w * 0.87, h * 0.246)
    ctx.closePath()
    ctx.stroke()

    // 右ペナルティエリア横線(上)
    ctx.beginPath()
    ctx.moveTo(w * 0.87, h * 0.75)
    ctx.lineTo(w * 0.96, h * 0.75)
    ctx.closePath()
    ctx.stroke()

    // 右ペナルティエリア横線(下)
    ctx.beginPath()
    ctx.moveTo(w * 0.87, h * 0.25)
    ctx.lineTo(w * 0.96, h * 0.25)
    ctx.closePath()
    ctx.stroke()

    // 右ペナルティアーク
    ctx.beginPath()
    ctx.arc(
      w * 0.87,
      h / 2,
      w / 30,
      (90 * Math.PI) / 180,
      (270 * Math.PI) / 180,
      false
    )
    ctx.closePath()
    ctx.stroke()

    // 右上コーナー
    ctx.beginPath()
    ctx.arc(
      w * 0.96,
      h / 40,
      w / 40,
      (90 * Math.PI) / 180,
      (180 * Math.PI) / 180,
      false
    )
    ctx.stroke()

    // 右下コーナー
    ctx.beginPath()
    ctx.arc(
      w * 0.96,
      h * 0.95,
      w / 40,
      (180 * Math.PI) / 180,
      (270 * Math.PI) / 180,
      false
    )
    ctx.stroke()
  })

  return (
    <div
      className='wrapper'
      style={{
        height: '90%',
        width: '100%',
      }}
    >
      <div
        className='pitch'
        style={{
          margin: 'auto',
          marginTop: '1%',
          marginBottom: '1%',
          height: '100%',
          width: '90%',
          backgroundColor: 'green',
          position: 'relative',
        }}
        ref={pitchRef}
      >
        <canvas
          className='canvas'
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'green',
            position: 'absolute',
          }}
          ref={canvasRef}
        ></canvas>
        <Circle />
      </div>
    </div>
  )
}

export default Board
