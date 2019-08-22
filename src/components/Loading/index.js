import React from 'react'
import { Spinner, SpinnerContainer } from './styles'

export const Loading = (props) => {
  return (
    <SpinnerContainer><Spinner color={props.color} /></SpinnerContainer>
  )
}
