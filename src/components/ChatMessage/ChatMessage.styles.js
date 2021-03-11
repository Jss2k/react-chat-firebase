import styled from 'styled-components'

export const ChatMessageContainer = styled.div`
  display: flex;
  padding: 1rem 2rem;
`

export const UserAvatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 2px;
  overflof: hidden;
  margin-right: 1rem;

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`
export const MessageContent = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.3rem;
`

export const UserName = styled.div`
  font-weight: 700;


  span {
    margin-left: 1rem;
    font-weight: 400;
    font-size: 1rem;
    color: #8c8989;
  }

`

export const MessageText = styled.div`

`