import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Title } from '../components/Title'
import { Layout } from '../components/Layout'

export const Favs = () => {
  return (
    <Layout
      title='Petgram - Tus favoritos.'
      subtitle='Aqui puedes encontrar tus favoritos.'
      useTitle={[false, false]}
    >
      <Title>Favoritos.</Title>
      <FavsWithQuery />
    </Layout>
  )
}
