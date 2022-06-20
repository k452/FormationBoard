import React from 'react'
import { useInteractJS } from 'hooks/interact'

const Circle: React.FC = () => {
  let marginLeft = '60px'
  let marginTop = '60px'
  return (
    <>
      {[...Array(11).keys()].map((i) => {
        const interact = useInteractJS()

        if (i === 0) {
          // GK
          marginLeft = '7%'
          marginTop = '22%'
        } else if (i === 1) {
          // LSB
          marginLeft = '25%'
          marginTop = '2%'
        } else if (i === 2) {
          // LCB
          marginLeft = '18%'
          marginTop = '12%'
        } else if (i === 3) {
          // RCB
          marginLeft = '18%'
          marginTop = '30%'
        } else if (i === 4) {
          // RSB
          marginLeft = '25%'
          marginTop = '40%'
        } else if (i === 5) {
          // DMF
          marginLeft = '28%'
          marginTop = '22%'
        } else if (i === 6) {
          // LMF
          marginLeft = '35%'
          marginTop = '12%'
        } else if (i === 7) {
          // RMF
          marginLeft = '35%'
          marginTop = '30%'
        } else if (i === 8) {
          // CF
          marginLeft = '45%'
          marginTop = '22%'
        } else if (i === 9) {
          // LWG
          marginLeft = '40%'
          marginTop = '2%'
        } else if (i === 10) {
          // RWG
          marginLeft = '40%'
          marginTop = '40%'
        }

        return (
          <div
            key={i}
            ref={interact.ref}
            style={{
              ...interact.style,
              marginLeft: `${marginLeft}`,
              marginTop: `${marginTop}`,
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'red',
            }}
          />
        )
      })}
    </>
  )
}

export default Circle
