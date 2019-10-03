import React from 'react'
import { PetContainer, SvgContainer } from './styles'
import { Cat, Dog, Hamster, Bunny, Bird, Fish } from './Animals'

export const Pet = (props) => {
  const { category } = props
  const getPet = (type = category) => {
    switch (type) {
      case 1 : return <Cat {...props} />
      case 2 : return <Dog {...props} />
      case 3 : return <Hamster {...props} />
      case 4 : return <Bunny {...props} />
      case 5 : return <Bird {...props} />
      case 6 : return <Fish {...props} />
      default : return <Cat {...props} />
    }
  }
  return (
    <PetContainer>
      <SvgContainer>
        {
          getPet()
        }
      </SvgContainer>
    </PetContainer>
  )
}
