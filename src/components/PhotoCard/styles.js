import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ImgWrapper = styled.div`
  ${fadeIn({ time: '2s' })}
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Container = styled.article`
  box-shadow: 0 0 5px rgba(0,0,0,.1);
  border-radius: 2%;
  min-height: 200px;
  width: 100%;
  margin-bottom: 10px;
`
