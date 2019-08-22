import styled, { keyframes, css } from 'styled-components'

const rotationKeyframes = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`
const spinnerAnimation = ({ speed = '1s', type = 'linear' } = {}) => css`
  animation: ${rotationKeyframes} ${speed} ${type} infinite ;
  -webkit-animation: ${rotationKeyframes} ${speed} ${type} infinite ;
`

export const Spinner = styled.div`

  position: absolute;
  ${spinnerAnimation()};
  width: 160px;
  height: 160px;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  box-shadow: 0 6px 0 0 ${props => props.color ? props.color : '#3e6d8d'};
  -webkit-transform-origin: 80px 83px;
  transform-origin: 80px 83px;
`

export const SpinnerContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  -webkit-transform: translate(-30px, -30px) scale(0.3) translate(30px, 30px);
  transform: translate(-30px, -30px) scale(0.3) translate(30px, 30px);
`
