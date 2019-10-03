import React from 'react'
import { Image, ImgWrapper, Container } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

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

export const PhotoCardPropTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  src: PropTypes.string,
  order: PropTypes.number,
  likes: (props, propName, componentName) => {
    const propValue = props[propName]
    if (propValue === undefined) return new Error(`${propName} value must be defined`)
    if (propValue < 0) return new Error(`${propName} must be greater or equal than 0`)
  }
}

PhotoCard.propTypes = PhotoCardPropTypes
