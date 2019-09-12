import React, { useContext } from 'react'
import { Context } from '../Context'
import { Title } from '../components/Title'
export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <Title>User</Title>
      <button onClick={removeAuth}>Cerrar Sesión</button>
    </>
  )
}
