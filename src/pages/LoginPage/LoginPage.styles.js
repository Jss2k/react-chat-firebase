import styled from 'styled-components'

import Button from './../../components/UI/Button/Button'

export const LoginPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Contant = styled.div`
  padding: 10rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)
`

export const LogoImg = styled.img`
  height: 10rem;
`

export const SignInButton = styled(Button)`
  margin-top: 50px;
  background-color: #15456f;
  height: 4rem;

`