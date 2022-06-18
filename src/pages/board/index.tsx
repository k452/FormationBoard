import React from 'react'
import Circle from 'components/circle'

const Board: React.FC = () => (
  <div style={{
    backgroundImage: 'url(\'/img/pitch.jpg\')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: '700px',
  }}
  >
    <Circle />
  </div>
)

export default Board
