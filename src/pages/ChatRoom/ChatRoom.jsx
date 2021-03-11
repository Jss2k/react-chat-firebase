import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from './../../firebase/utils'
import firebase from 'firebase'

import ChatMessage from '../../components/ChatMessage/ChatMessage'
import ChatInput from './../../components/ChatInput/ChatInput'

import {
  ChatRoomWrapper,
  HeaderChat,
  ChannelName,
  ChannelInfo,
  MessageContainer
} from './ChatRoom.styles'

const ChatRoom = ({ user }) => {

  let { channelId } = useParams()
  const [channel, setChannel] = useState()
  const [messages, setMessages] = useState([])

  const getMessages = () => {
    firestore.collection('rooms')
    .doc(channelId)
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot((snapshot) => {
      let messages = snapshot.docs.map((doc) => doc.data())
      setMessages(messages)
    })
  }

  const sendMessage = (text) => {
    if (channelId) {
      let payload = {
        text: text,
        timestamp: firebase.firestore.Timestamp.now(),
        user: user.name,
        userImage: user.photo
      }
      firestore.collection('rooms')
      .doc(channelId)
      .collection('messages')
      .add(payload)
    }
  }

  const getChannel = () => {
    firestore.collection('rooms')
    .doc(channelId)
    .onSnapshot((snapshot) => {
      setChannel(snapshot.data())
    })
  }

  useEffect(() => {
    getChannel()
    getMessages()
  }, [channelId])

  return (
    <ChatRoomWrapper>
      <HeaderChat>
        <ChannelName>
          # { channel && channel.name}
        </ChannelName>
        <ChannelInfo>
          assdasad asd asd asa
        </ChannelInfo>
      </HeaderChat>
      <MessageContainer>
        {
          messages.length > 0 &&
          messages.map((data, index) => (
            <ChatMessage 
              text={data.text}
              name={data.user}
              image={data.userImage}
              timestamp={data.timestamp}
            />
          ))
        }
      </MessageContainer>
      <ChatInput sendMessage={sendMessage} />
    </ChatRoomWrapper>
  )
}

export default ChatRoom