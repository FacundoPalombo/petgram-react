import React from 'react'
import { PetContainer } from './styles'
import { Cat, Dog, Hamster, Bunny, Bird, Fish }
export const Pet = ({ category }) => {
  return (
    <PetContainer>
      {
        () => {
          switch (category) {
            case 1 : return ''
            case 2 : return ''
            case 3 : return ''
            case 4 : return ''
            case 5 : return ''
            case 6 : return ''
            case 7 : return ''
            default : return ''
          }
        }
      }
    </PetContainer>
  )
}
