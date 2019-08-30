import React from 'react'
import { Image, ImgWrapper, Container } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

export const PhotoCard = ({ id, likes = 0, src, order }) => {
  const key = `like-${id}`
  const [show, ref] = useNearScreen(false)
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Container ref={ref}>
      {
        show && (
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                {show && (<Image src={src} />)}
              </ImgWrapper>
            </a>
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
