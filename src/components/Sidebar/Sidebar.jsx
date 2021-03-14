import { useHistory } from 'react-router-dom'
import { firestore } from './../../firebase/utils'

import User from './../User/User'

import {
  StyledSidebar,
  WorkspaceContainer,
  ChannelsContainer,
  NewChannelContainer,
  ChannelList,
  Channel,
  AddIconStyled
} from './Sidebar.styles'

const Sidebar = (props) => {

  const history = useHistory()

  const goToChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`)
    }
  }

  const addChannel = () => {
    const promptName = prompt('Enter channel name')
    if(promptName) {
      firestore.collection('rooms').add({
        name: promptName
      })
    }
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
            onClick={addChannel}
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
    </StyledSidebar>
  )
}

export default Sidebar