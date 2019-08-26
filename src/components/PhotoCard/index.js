import React from 'react'
import { Button, Image, ImgWrapper, Container } from './styles'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useNearScreen } from '../hooks/useNearScreen'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md/'
import { FaDog, FaCat } from 'react-icons/fa/'

export const PhotoCard = ({ id, likes = 0, src, order }) => {
  const loading = true
  const key = `like-${id}`
  const [show, ref] = useNearScreen(false)
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder
  const FaPet = order % 2 === 0 ? FaCat : FaDog

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
            <Button onClick={() => setLiked(!liked)}>
              <Icon size='32px' />{likes}
            </Button>
          </>
        )
      }
    </Container>
  )
}
