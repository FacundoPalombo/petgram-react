import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Title } from '../components/Title'

export const Favs = () => {
  return (
    <>
      <Title content='Favorites' />
      <FavsWithQuery />
    </>
  )
}
