import React from 'react'
import { Image, ImgWrapper, Container } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from '@reach/router'

export const PhotoCard = ({ id, liked, likes, src, order }) => {
  const [show, ref] = useNearScreen(false)
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
              toggleLike({
                variables: {
                  input: { id }
                }
              })
            }
            return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          }
        }
      </ToggleLikeMutation>
    </Container>
  )
}
