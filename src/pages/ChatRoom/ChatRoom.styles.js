import styled from 'styled-components'

export const ChatRoomWrapper = styled.main`
  display: grid;
  grid-template-rows: 7rem auto min-content;
  min-height: 0;
`

export const HeaderChat = styled.div`
  color: white;
  display: flex;
  border-bottom: 1px solid rgba(255 255 255 / 10%);
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

export const ChannelName = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
`

export const ChannelInfo = styled.div`
  font-weight: 400;
  color: #8c8989;
  font-size: 1.3rem;
`

