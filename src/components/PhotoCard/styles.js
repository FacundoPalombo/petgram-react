import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ImgWrapper = styled.div`
  ${fadeIn({ time: '2s' })}
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 000;
  position: relative;
  width: 100%;
`

export const Image = styled.img`
  box-shadow: 010px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  display: flex; 
  align-items: center;
  padding-top: 8px;    
  & svg {
      margin-right: 4px;

  }
`
export const Container = styled.article`
  min-height: 200px;
  width: 100%;
  margin-bottom: 10px;
`
