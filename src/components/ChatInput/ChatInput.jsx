import SendIcon from '@material-ui/icons/Send'

import {
  ChatInputContainer,
  InputContainer,
  SendButton
} from './ChatInput.styles'

const ChatInput = () => {
  return (
    <ChatInputContainer>
      <InputContainer>
        <form>
          <input type='text' placeholder='Message here...' />
          <SendButton>
            <SendIcon />
          </SendButton>
        </form>
      </InputContainer>
    </ChatInputContainer>
  )
}

export default ChatInput