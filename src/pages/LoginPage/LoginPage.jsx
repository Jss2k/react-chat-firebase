import { auth, GoogleProvider } from './../../firebase/utils'

import Logo from './../../assets/img-logo.png'

import {
  LoginPageWrapper,
  Contant,
  LogoImg,
  SignInButton
} from './LoginPage.styles'

const LoginPage = (props) => {

  const signIn = () => {
    auth.signInWithPopup(GoogleProvider)
    .then((res) => {
      const newUser = {
        name: res.user.displayName,
        photo: res.user.photoURL,
      }
      localStorage.setItem('user', JSON.stringify(newUser))
      props.setUser(newUser)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  return (
    <LoginPageWrapper>
      <Contant>
        <LogoImg src={Logo} alt='logo image' />
        <h1>Sign in Trashcan</h1>
        <SignInButton onClick={()=>signIn()}>
          Sign in With Google
        </SignInButton>
      </Contant>
    </LoginPageWrapper>
  )
}

export default LoginPage

