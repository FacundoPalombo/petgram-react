import React, { Component } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyle'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
export default class App extends Component {
  render () {
    return (
      <>
        <Logo />
        <GlobalStyle />
        <ListOfCategories />
        <ListOfPhotoCards />
      </>
    )
  }
}
