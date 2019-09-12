import React from 'react'
import { Button as StyledButton } from './styles'
import { IoIosLogOut as Logout } from 'react-icons/io'
export const Button = ({ content, onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      <Logout size='20px' />
      {children || content}
    </StyledButton>
  )
}
