import styled from 'styled-components'

export const H2 = styled.h2`
  font-weight: 900;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding-block-end: 0;
  padding-block-start: 0;
  margin-block-end: 0;
  margin-block-start: 0;
  margin: 0;
  padding: 0;
  background: ${props => props.gradient ? props.gradient : ('linear-gradient(20deg, rgba(247,119,55,1) 0%, rgba(247,119,55,.7) 40%, rgba(255,220,128,.6) 100%)')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(0,0,0,.2);
  ${props => props.size ? (`font-size: ${props.size}`) : ('font-size: 32px')};

`
