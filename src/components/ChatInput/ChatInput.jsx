import { useState } from 'react'

import SendIcon from '@material-ui/icons/Send'

import {
  ChatInputContainer,
  InputContainer,
  SendButton
} from './ChatInput.styles'

const ChatInput = ({ sendMessage }) => {

  const [input, setInput] = useState('')

  const send = (e) => {
    e.preventDefault()
    if (!input) return
    sendMessage(input)
    setInput('')
  }

  return (
    <ChatInputContainer>
      <InputContainer>
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type='text'
            placeholder='Message here...' />
          <SendButton
            type='submit'
            onClick={send}
          >
            <SendIcon />
          </SendButton>
        </form>
      </InputContainer>
    </ChatInputContainer>
  )
}

export default ChatInput