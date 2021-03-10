import styled from 'styled-components'

export const StyledSidebar = styled.aside`
  background: #0b0c21;
  box-shadow: 0 1px 0 0 rgba(255 255 255 / 10%);
`

export const WorkspaceContainer = styled.div`
  color: white;
  height: 7rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  justify-content: space-around;
  border-bottom: 1px solid rgba(255 255 255 / 10%);
`

export const Name = styled.div`

`

export const NewMessage = styled.div`
  display: flex;
  align-items: center;
`

export const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);

`

export const NewChannelContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  justify-content: space-between;
  margin: 1rem 2rem;
`

export const ChannelList = styled.div`
  font-size: 1.5rem;
`

export const Channel = styled.div`
  height: 3rem;
  display: flex;
  ailign-items: center;
  cursor: pointer;
  vertical-align: center;
  &:hover {
    background: #001b31;
  }

  span {
    margin-left: 3rem;
    line-height: 3rem;
  }
`