import {
  ChatMessageContainer,
  UserAvatar,
  MessageContent,
  UserName,
  MessageText
} from './ChatMessage.styles'

const ChatMessage = () => {
  return (
    <ChatMessageContainer>
      <UserAvatar>
        <img src='https://randomuser.me/api/portraits/men/90.jpg' alt='User' />
      </UserAvatar>
      <MessageContent>
        <UserName>
          Jesus Christ
          <span>dd/mm/yy</span>
        </UserName>
        <MessageText>
          sada asdaad ad aa a ad ad ad dadasadd
        </MessageText>
      </MessageContent>
    </ChatMessageContainer>
  )
}

export default ChatMessage