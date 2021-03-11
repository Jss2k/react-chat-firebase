import {
  ChatMessageContainer,
  UserAvatar,
  MessageContent,
  UserName,
  MessageText
} from './ChatMessage.styles'

const ChatMessage = ({ text, name, image, timestamp }) => {
  return (
    <ChatMessageContainer>
      <UserAvatar>
        <img src={image} alt='User pic' />
      </UserAvatar>
      <MessageContent>
        <UserName>
          {name}
          <span>{new Date(timestamp.toDate()).toUTCString()}</span>
        </UserName>
        <MessageText>
          {text}
        </MessageText>
      </MessageContent>
    </ChatMessageContainer>
  )
}

export default ChatMessage