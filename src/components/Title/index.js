import React from 'react'
import { H2 } from './styles'

export const Title = ({ content, children, size }) => {
  return (
    <>
      <H2 size={size}>{content || children}</H2>
    </>
  )
}
