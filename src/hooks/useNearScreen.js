import { useEffect, useState, useRef } from 'react'

export const useNearScreen = (key, ref) => {
  const [near, setNear] = useState(key)
  const element = useRef(null)
  useEffect(() => {
    Promise.resolve(typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver
      : import('intersection-observer')).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setNear(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])
  return [near, element]
}
