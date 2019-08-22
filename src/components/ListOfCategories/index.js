import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { Loading } from '../Loading'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server-fpalombo-d94ty634r.now.sh/categories')
      .then(res => res.json())
      .then(response => { setCategories(response); setLoading(false) })
  }, [])

  return { categories, loading }
}

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
        loading ? <Loading /> : categories.map(category => (<Item key={category.id}><Category {...category} /></Item>))
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
