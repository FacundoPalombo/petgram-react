import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import { FaDog as Dog, FaCat as Cat } from 'react-icons/fa/'

const query = gql`
query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const PhotoCardWithQuery = ({ id, categoryId }) => {
  const Pet = (categoryId) => {
    switch(categoryId) {
      case 1 : return Cat
      case 2 : return Dog
      case 3 : return Hamster
      case 4 : return Bunny
      case 5 : return Bird
      case 6 : return Fish
      default : return 
    }
  }
  return (
    <Query query={query} variables={{ id, categoryId }}>
      {
        ({ loading, error, data }) => {
          const { photo = {} } = data
          <Pet size='300px' color='#BBB' />
          return (
            <PhotoCard {...photo} />
          )
        }
      }
    </Query>
  )
}
