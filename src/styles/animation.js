import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes`
from {
  filter: blur(5px);
  opacity: 0;
}
to {
  filter: blur(0);
  opacity: 1;
}
`
const slideInDownKeyframes = keyframes`
  from {
    top: -50px;
  }
  to {
    top: -20;
    -webkit-transform: scale(.5);
    transform: scale(.5);
  }
`
const slideInUpKeyframes = keyframes`
  from {
    top: -20;
    -webkit-transform: scale(.5);
    transform: scale(.5);
  }
  to {
    top: -50px;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
  animation: ${time} ${fadeInKeyframes} ${type};
`
export const slideInDown = ({ time = '1s', type = 'ease' } = {}) =>
  css`
  animation: ${time} ${slideInDownKeyframes} ${type};
`
export const slideInUp = ({ time = '1s', type = 'ease' } = {}) =>
  css`
  animation: ${time} ${slideInUpKeyframes} ${type};
`
