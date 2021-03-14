import styled from 'styled-components'

export const UserContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const UserName = styled.div`

`

export const UserImage = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  overflow: hidden;
  border: 2px solid rgba(255,255,255,0.4);
  border-radius: 50%;
  transition: linear 0.25s;
  cursor: pointer; 

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