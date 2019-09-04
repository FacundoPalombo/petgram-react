import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { Loading } from '../Loading'
import { useCategoriesData } from '../../hooks/useCategoriesData.js'

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
  })
  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ? <Loading /> : categories.map(category => (<Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>))
      }
    </List>
  )
  if (loading) return (<Loading />)
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
