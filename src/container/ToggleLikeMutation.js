import React from 'react'
import { Mutation } from 'react-apollo'
import { LIKE_PHOTO } from '../gql/mutations/photos'

export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE_PHOTO}>
      {children}
    </Mutation>
  )
}
