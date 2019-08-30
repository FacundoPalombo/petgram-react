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
const popInBottomKeyframes = keyframes`
  0% {
    -webkit-transform: translate3d(0, 200px, 0) scale3d(0.1, 0.1, 0.1);
    transform: translate3d(0, 200px, 0) scale3d(0.1, 0.1, 0.1);
    opacity: 0; }
  40% {
    opacity: 1;
    -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    -webkit-transform: translate3d(0, 0, 0) scale3d(1.08, 1.08, 1.08);
    transform: translate3d(0, 0, 0) scale3d(1.08, 1.08, 1.08); }
  60% {
    -webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1); }
  80% {
    -webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    -webkit-transform: translate3d(0, 0, 0) scale3d(1.03, 1.03, 1.03);
    transform: translate3d(0, 0, 0) scale3d(1.03, 1.03, 1.03); }
  100% {
    -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1); } }
`
const popOutKeyframes = keyframes`
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1); }
  60% {
    -webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    -webkit-transform: scale3d(1.08, 1.08, 1.08);
    transform: scale3d(1.08, 1.08, 1.08); }
  80% {
    opacity: 1;
    -webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); }
  100% {
    opacity: 0;
    -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3); }
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
export const popInBottom = ({ time = '1s' } = {}) =>
  css`
  animation: ${time} ${popInBottomKeyframes};
`
export const popOut = ({ time = '0.5s' } = {}) =>
  css`
  animation: ${time} ${popOutKeyframes};
`
