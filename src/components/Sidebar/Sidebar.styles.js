import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add'

export const StyledSidebar = styled.aside`
  background: #0b0c21;
  display: grid;
  grid-template-rows: 7rem auto;
`

export const WorkspaceContainer = styled.div`
  color: white;
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

export const AddIconStyled = styled(AddIcon)`
  cursor: pointer;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-width: 30rem;
  min-height: 30rem;

h2 {
  letter-spacing: 1px;
  text-transform: uppercase;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  input {
    flex: 1;
    border: none;
    font-size: 1.5rem;
    background: white;
    margin: 1rem 0;
  }

  input:focus {
    outline: none;
  }

  label {
    font-size: 1.3rem;
  }

  button {
    width: 100%;
    height: 4rem;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    cursor: pointer;
    color: black;
    text-transform: uppercase;
  }
`