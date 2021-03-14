import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import Input from '../UI/Input/Input'

import TextLogo from './../../assets/text-logo.png'

import {
  StyledHeader,
  Main,
  SearchContainer,
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
    </StyledHeader>
  )
}

export default Header