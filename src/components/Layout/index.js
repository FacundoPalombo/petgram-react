import React from 'react'
import { Helmet } from 'react-helmet'
import { Title } from '../Title'
export const Layout = ({ children, title, subtitle, useTitle = [false, false] }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={subtitle} />
      </Helmet>
      {useTitle[0] && <Title content={title} size='32px' />}
      {useTitle[1] && <Title content={subtitle} size='24px' gradient='linear-gradient(90deg, rgba(181,0,181,0.4) 0%, rgba(255,143,0,0.4) 100%)' />}
      {children}
    </>
  )
}
