import styled from 'styled-components'

export const Svg = styled.svg`
width: ${props => props.size ? props.size : '300px'};
height: ${props => props.size ? props.size : '300px'};
display: block;
margin: auto;
`
