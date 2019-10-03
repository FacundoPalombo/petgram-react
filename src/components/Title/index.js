import React from 'react'
import { H2 } from './styles'

export const Title = ({ content, children, size, gradient }) => {
  return (
    <>
      <H2 size={size} gradient={gradient}>{content || children}</H2>
    </>
  )
}
