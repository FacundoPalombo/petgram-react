import styled from 'styled-components'
import { popInBottom, popOut } from '../../styles/animation'
export const SvgContainer = styled.div`
  ${popInBottom({ time: '.7s' })}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  width: 90%;
  margin: auto;
`

export const PetContainer = styled.article`
  box-shadow: 0 0 5px rgba(0,0,0,.1);
  border-radius: 2%;
  min-height: 200px;
  width: 100%;
  margin-bottom: 10px;
`
