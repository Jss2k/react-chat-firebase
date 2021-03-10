import styled from 'styled-components'

export const StyledHeader = styled.header`
  max-width: 100%;
  background: #350d36;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 2rem;
`

export const Main = styled.div`
  flex: 0 0 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  
`

export const SearchContainer = styled.div`
  margin: 0 1rem;
  width: 90%;
`

export const UserContainer = styled.div`
  flex: 0 0 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const UserName = styled.div`

`

export const UserImage = styled.div`
  height: 4rem;
  width: 4rem;
  overflow: hidden;
  border: 2px solid rgba(255,255,255,0.4);
  border-radius: 50%;
  transition: linear 0.25s;

  &:hover {
    transition: ease-out 0.2s;
    border: 2px solid rgba(255,255,255,0.8);
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }


`