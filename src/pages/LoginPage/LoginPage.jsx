// import { auth, GoogleProvider } from './../../firebase/utils'

// import Button from '../../components/UI/Button/Button'
import Logo from './../../assets/logo.png'

import {
  LoginPageWrapper,
  Contant,
  LogoImg
} from './LoginPage.styles'

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      {/* <Button
        onClick={() => {
          auth.signInWithPopup(GoogleProvider)
        }}
      /> */}
      <Contant>
        <LogoImg src={Logo} alt='logo image' />
      </Contant>
    </LoginPageWrapper>
  )
}

export default LoginPage

