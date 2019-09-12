import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] }, categoryId } = {}) => {
  return (
    <List>
      {
        photos.map(pc => <PhotoCard key={pc.id} src={pc.src} order={pc.categoryId} id={pc.id} likes={pc.likes} liked={pc.liked} />)
      }
    </List>
  )
}
