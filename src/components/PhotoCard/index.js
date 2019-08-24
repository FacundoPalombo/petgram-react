import React, { useRef, useEffect, useState } from 'react'
import { Button, Image, ImgWrapper, Container } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md/'

import { FaDog, FaCat } from 'react-icons/fa/'

export const PhotoCard = ({ id, likes = 0, src, order }) => {
  const loading = true
  const key = `like-${id}`
  const [show, setShow] = useState(false)
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage(key)
      return like
    } catch (error) {
      console.error(error)
      return false
    }
  })

  const ref = useRef(null)
  useEffect(() => {
    Promise.resolve(typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver
      : import('intersection-observer')).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(ref.current)
    })
  }, [ref])

  const Icon = liked ? MdFavorite : MdFavoriteBorder
  const FaPet = order % 2 === 0 ? FaCat : FaDog

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Container ref={ref}>
      {
        show && (
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                {
                  loading ? (<FaPet size='300px' color='#BBB' />) : (<Image src={src} />)
                }
              </ImgWrapper>
            </a>
            <Button onClick={() => setLocalStorage(!liked)}>
              <Icon size='32px' />{likes}
            </Button>
          </>
        )
      }
    </Container>
  )
}
