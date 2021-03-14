import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { firestore } from './../../firebase/utils'

import User from './../User/User'
import Modal from './../Modal/Modal'

import {
  StyledSidebar,
  WorkspaceContainer,
  ChannelsContainer,
  NewChannelContainer,
  ChannelList,
  Channel,
  AddIconStyled,
  ModalContent
} from './Sidebar.styles'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

const Sidebar = (props) => {

  const history = useHistory()
  const [isOpenModal, setOpenModal] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const goToChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`)
    }
  }

  const addChannel = (e) => {
    e.preventDefault()
      firestore.collection('rooms').add({
        name: name,
        description: description
      })
  }

  return (
    <StyledSidebar>
      <WorkspaceContainer>
        <User signOut={props.signOut} user={props.user} />
      </WorkspaceContainer>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>
            Channels
          </div>
          <AddIconStyled
            fontSize='large'
            onClick={() => setOpenModal(true)}
          />
        </NewChannelContainer>
        <ChannelList>
          {
            props.rooms.map(item => (
              <Channel 
                key={item.id}
                onClick={()=>goToChannel(item.id)}
              >
                <span># {item.name}</span>
              </Channel>
            ))
          }
        </ChannelList>
      </ChannelsContainer>
      <Modal isOpenModal={isOpenModal} close={() => setOpenModal(false)}>
        <ModalContent>
          <h2>create a new channel</h2>
            <form>
              <Input 
                type='text'
                label='Channel name(max length - 20)'
                maxLength='20'
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder='Message here...'
              />
              <Input 
                type='text'
                label='Description(max length - 50)'
                maxLength='50'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder='Message here...'
              />
              <Button
                type='submit'
                onClick={addChannel}
              >
                create channel
              </Button>
            </form>
        </ModalContent>
      </Modal>
    </StyledSidebar>
  )
}

export default Sidebar