import { graphql } from 'react-apollo'
import { GET_PHOTOS } from '../../gql/queries/photos'

export const withPhotos = graphql(GET_PHOTOS)
