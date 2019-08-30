import { useState, useEffect } from 'react'

export const useCategoriesData = () => {
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
