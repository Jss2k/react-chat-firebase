
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

const Sidebar = () => {
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
          <AddIcon fontSize='large' />
        </NewChannelContainer>
        <ChannelList>
          <Channel>
            <span># sdasdad</span>
          </Channel>
          <Channel>
          <span># sdasdad</span>
          </Channel>
          <Channel>
          <span># sdasdad</span>
          </Channel>
        </ChannelList>
      </ChannelsContainer>
    </StyledSidebar>
  )
}

export default Sidebar