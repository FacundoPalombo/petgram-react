import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Button } from './styles'

export const FavButton = ({ likes, liked, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (

    <Button onClick={onClick}>
      <Icon size='32px' />{likes}
    </Button>
  )
}
