type interactType = {
  ref: React.MutableRefObject<null>
  style: {
    transform: string
    width: string
    height: string
    position: CSSProperties['position']
  }
  position: {
    width: number
    height: number
    x: number
    y: number
  }
  isEnabled: boolean
  enable: () => void
  disable: () => void
}
