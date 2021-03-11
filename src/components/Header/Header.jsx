import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import Input from '../UI/Input/Input'

import TextLogo from './../../assets/text-logo.png'
import UserImg from './../../assets/user-img.jpg'

import {
  StyledHeader,
  Main,
  SearchContainer,
  UserContainer,
  UserName,
  UserImage,
  HeaderLogo
} from './Header.styles'

const Header = ({ user, signOut }) => {
  return (
    <StyledHeader>
      <Main>
        <HeaderLogo>
          <img src={TextLogo} alt="Blind method" />
        </HeaderLogo>
        <SearchContainer >
            <Input
              type='text'
              placeholder='Search...'
            />
        </SearchContainer>
        <HelpOutlineIcon fontSize='large'/>
      </Main>
      <UserContainer>
        <UserName>
          {user.name}
        </UserName>
        <UserImage onClick={signOut} >
          <img src={user.photo ? user.photo : {UserImg}} alt='User pic' />
        </UserImage>
      </UserContainer>
    </StyledHeader>
  )
}

export default Header