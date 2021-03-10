import { firestore } from './../../firebase/utils'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import AddIcon from '@material-ui/icons/Add'

import {
  StyledSidebar,
  WorkspaceContainer,
  Name,
  NewMessage,
  ChannelsContainer,
  NewChannelContainer,
  ChannelList,
  Channel
} from './Sidebar.styles'

const Sidebar = (props) => {

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
        <Name>
          Garbage collection
        </Name>
        <NewMessage>
          <AddCircleOutlineIcon fontSize='large' />
        </NewMessage>
      </WorkspaceContainer>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>
            Channels
          </div>
          <AddIcon
            fontSize='large'
            onClick={addChannel}
          />
        </NewChannelContainer>
        <ChannelList>
          {
            props.rooms.map(item => (
              <Channel key={item.id}>
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