import React from 'react'
import styled from 'styled-components'

const Message = styled.h2`
  font-size: 76px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  background: linear-gradient(90deg, #b500b5 0%, #ff8f00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(0,0,0,.2);
`
export const NotFound = ({ message, children }) => {
  return (
    <>
      <Message>
        {message || children || 'Error 404: Resource not found :('}
      </Message>
    </>
  )
}
