import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'
export const Nav = styled.nav`
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  background: #FCFCFC;
`

export const Link = styled(LinkRouter)`
  color: #555;
  border-top: .5px solid rgba(0,0,0,.2);
  border-bottom: .5px solid rgba(0,0,0,.2);
  padding: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &[aria-current] {
    color: #000;
    &:after {
      ${fadeIn({ time: '.5s ' })};
      content: '.';
      position: absolute;
      bottom: 0;
      font-size: 32px;
      line-height: 1;
    }
  }
`
