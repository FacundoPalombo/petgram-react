import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { Query } from 'react-apollo'
import { Pet } from '../components/Pet'
import { GET_SINGLE_PHOTO } from '../gql/queries/photos'

const renderProp = ({ loading, error, data }, categoryId) => {
  const { photo = {} } = data
  return (
    <>
      {
        loading
          ? (
            <Pet category={categoryId} />
          )
          : (
            <PhotoCard {...photo} />
          )
      }
    </>
  )
}

export const PhotoCardWithQuery = ({ id, categoryId }) => {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id, categoryId }}>
      {renderProp}
    </Query>
  )
}
