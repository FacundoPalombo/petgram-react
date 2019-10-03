import React, { useContext } from 'react'
import { Context } from '../Context'
import { Title } from '../components/Title'
import { Button } from '../components/Button'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <Title>User</Title>
      <Button onClick={removeAuth}>Cerrar Sesión</Button>
    </>
  )
}
