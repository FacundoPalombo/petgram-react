import React from 'react'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'

export const Home = ({ id }) => {
  return (
    <Layout
      title='Petgram - Tu app de fotos de mascotas.'
      subtitle='Con petgram puedes encontrar fotos de animales domesticos muy bonitos.'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}
