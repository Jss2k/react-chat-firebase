import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from './../../firebase/utils'
import firebase from 'firebase/app'

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
  const [position, setPosition] = useState(JSON.parse(localStorage.getItem('currentChannel')))
  const messagesRef = useRef(null)

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

  useEffect(() => {
    if (!channel) return
    setPosition(JSON.parse(localStorage.getItem(`${channel.name}`)))
    localStorage.setItem('currentChannel', JSON.stringify(`${channel.name}`))
  }, [channel])

  useEffect(() => {
    messagesRef.current.scrollTo(0, position)
  })

  useEffect(() => {
    if ((messagesRef.current.clientHeight + position) === messagesRef.current.scrollHeight) {
      setPosition(99999)
     }
  }, [messages, position])

  const lastPosition = () => {
    localStorage.setItem(`${channel.name}`, JSON.stringify(messagesRef.current.scrollTop))
    setPosition(JSON.parse(localStorage.getItem(`${channel.name}`)))
  }

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
      <MessageContainer ref={messagesRef} onScroll={lastPosition}>
        {
          messages.length > 0 &&
          messages.map((data, index) => {
            return (
            <ChatMessage
              key={index}
              text={data.text}
              name={data.user}
              image={data.userImage}
              timestamp={data.timestamp}
            />
          )
        
          })
        }
      </MessageContainer>
      <ChatInput sendMessage={sendMessage}/>
    </ChatRoomWrapper>
  )
}

export default ChatRoom