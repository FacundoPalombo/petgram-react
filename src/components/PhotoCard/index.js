import React, { useRef, useEffect, useState } from 'react'
import { Button, Image, ImgWrapper, Container } from './styles'
import { MdFavoriteBorder } from 'react-icons/md/'
import { FaDog, FaCat } from 'react-icons/fa/'

export const PhotoCard = ({ id, likes = 0, src }) => {
  const loading = true
  const [show, setShow] = useState(false)
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
  return (
    <Container ref={ref}>
      {
        show && (
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                {
                  loading ? (Math.random() * 10 < 5 ? (<FaCat size='300px' color='#BBB' />) : (<FaDog size='300px' color='#BBB' />)) : (<Image src={src} />)
                }
              </ImgWrapper>
            </a>
            <Button>
              <MdFavoriteBorder size='32px' />{likes}
            </Button>
          </>
        )
      }
    </Container>
  )
}
