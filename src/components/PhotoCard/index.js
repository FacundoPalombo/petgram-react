import React from 'react'
import { Image, ImgWrapper, Container } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from '@reach/router'

export const PhotoCard = ({ id, likes = 0, src, order }) => {
  const key = `like-${id}`
  const [show, ref] = useNearScreen(false)
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Container ref={ref}>
      {
        show && (
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                {show && (<Image src={src} />)}
              </ImgWrapper>
            </Link>
          </>
        )
      }
      <ToggleLikeMutation>
        {
          (toggleLike) => {
            const handleFavClick = () => {
              !liked && toggleLike({
                variables: {
                  input: { id }
                }
              })
              setLiked(!liked)
            }
            return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          }
        }
      </ToggleLikeMutation>
    </Container>
  )
}
