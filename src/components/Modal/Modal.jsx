import { useEffect, useRef } from "react"
import ReactDOM from "react-dom"

import {
  ModalConteiner,
  Backdrop,
  Header,
  Content,
  ScrollDisabler,
  StyledCloseIcon
} from './Modal.styles'

const portalRoot = document.getElementById("portal-root")

const Modal = ({ isOpenModal, close, children}) => {
  const contentRef = useRef()

  useEffect(() => {
    if (!isOpenModal) return
    
    function listener(e) {
      if (contentRef.current?.contains(e.target)) return
      close()
    }

    window.addEventListener("click", listener)

    return () => {
      window.removeEventListener("click", listener)
    }
  }, [isOpenModal])

  if (!isOpenModal) return null
  return ReactDOM.createPortal(
    <ModalConteiner>
      <Backdrop>
        <Content ref={contentRef}>
          <Header>
            <StyledCloseIcon 
              onClick={close}
            />
          </Header>
          {children}
        </Content>
        <ScrollDisabler />
      </Backdrop>
    </ModalConteiner>,
    portalRoot
  )
}

export default Modal
