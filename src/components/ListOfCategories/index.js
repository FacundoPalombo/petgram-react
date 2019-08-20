import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import axios from 'axios'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    window.fetch('https://petgram-server-fpalombo-d94ty634r.now.sh/categories')
      .then(res => res.json())
      .then(response => setCategories(response))
  }, [])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => (<Item key={category}><Category {...category} /></Item>))
      }
    </List>
  )
  return (
    <>
      {renderList()}
      {renderList(true)}
    </>
  )
}
