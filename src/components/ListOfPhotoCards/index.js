import React from 'react'
import { PhotoCard, PhotoCardPropTypes } from '../PhotoCard'
import { List } from './styles'
import PropTypes from 'prop-types'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] }, categoryId } = {}) => {
  return (
    <List>
      {
        photos.map(pc => <PhotoCard key={pc.id} src={pc.src} order={pc.categoryId} id={pc.id} likes={pc.likes} liked={pc.liked} />)
      }
    </List>
  )
}

ListOfPhotoCardsComponent.PropTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape(PhotoCardPropTypes)
  ),
  categoryId: PropTypes.number
}
