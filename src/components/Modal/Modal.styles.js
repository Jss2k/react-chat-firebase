import styled from 'styled-components'
import { Global } from './../../global.styles'

import CloseIcon from '@material-ui/icons/Close'

export const ModalConteiner = styled.div`

`

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(0 0 0 / 80%);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const Content = styled.div`
  background-color: #15456f;
  color: white;
  padding: 20px;
  border-radius: 20px;
  max-width: 90%;
  max-height: 90%;
  box-shadow: 0 3px 15px -3px rgba(0, 0, 0, 0.2);
  position: relative;
`

export const ScrollDisabler = styled(Global)`
  body {
    overflow-y: hidden;
  }
`

export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`