import ChatMessage from '../../components/ChatMessage/ChatMessage'
import ChatInput from './../../components/ChatInput/ChatInput'

import {
  ChatRoomWrapper,
  HeaderChat,
  ChannelName,
  ChannelInfo,
  MessageContainer
} from './ChatRoom.styles'

const ChatRoom = () => {
  return (
    <ChatRoomWrapper>
      <HeaderChat>
        <ChannelName>
          # adaasd adsd
        </ChannelName>
        <ChannelInfo>
          assdasad asd asd asa
        </ChannelInfo>
      </HeaderChat>
      <MessageContainer>
        <ChatMessage />
      </MessageContainer>
      <ChatInput />
    </ChatRoomWrapper>
  )
}

export default ChatRoom