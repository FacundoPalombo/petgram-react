import React from 'react'
import { FiUser, FiHome, FiStar } from 'react-icons/fi'
import { Nav, Link } from './styles'
export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'><FiHome size='32px' /></Link>
      <Link to='/favs'><FiStar size='32px' /></Link>
      <Link to='/user'><FiUser size='32px' /></Link>
    </Nav>
  )
}
// change Fi to Ti for typicons icon set...
