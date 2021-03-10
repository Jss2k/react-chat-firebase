import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import Input from '../UI/Input/Input'

import {
  StyledHeader,
  Main,
  SearchContainer,
  UserContainer,
  UserName,
  UserImage
} from './Header.styles'

const Header = () => {
  return (
    <StyledHeader>
      <Main>
        <AccessTimeIcon fontSize='large' />
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