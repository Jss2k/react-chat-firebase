import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import Input from '../UI/Input/Input'

import TextLogo from './../../assets/text-logo.png'

import {
  StyledHeader,
  Main,
  SearchContainer,
  UserContainer,
  UserName,
  UserImage,
  HeaderLogo
} from './Header.styles'

const Header = () => {
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
          mr.Jesus
        </UserName>
        <UserImage>
          <img src='https://picsum.photos/200/300' alt='User' />
        </UserImage>
      </UserContainer>
    </StyledHeader>
  )
}

export default Header