import React from 'react'
import useInteractJS from 'hooks/interact'

const NumOfPlayer = 11

const isUndefined = (arg: interactType | undefined): arg is undefined =>
  arg === undefined

const Circle: React.FC = () => {
  let marginLeft = '0px'
  let marginTop = '0px'

  const interacts: interactType[] = []

  const copyInteract = (callBack: () => interactType) => {
    for (let i = 0; i < NumOfPlayer; i += 1) {
      interacts.push(callBack())
    }
  }

  copyInteract(useInteractJS)

  return (
    <>
      {[...Array(NumOfPlayer).keys()].map((i) => {
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

        const tmpInteract = interacts[i]

        if (isUndefined(tmpInteract)) {
          return (
            <div
              key={i}
              style={{
                width: '0px',
                height: '0px',
              }}
            />
          )
        }

        return (
          <div
            key={i}
            ref={tmpInteract.ref}
            style={{
              ...tmpInteract.style,
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
