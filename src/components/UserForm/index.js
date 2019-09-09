import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const UserForm = ({ onSubmit, disabled, title, error }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder='email' {...email} />
        <Input disabled={disabled} placeholder='password' type='password' {...password} />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
