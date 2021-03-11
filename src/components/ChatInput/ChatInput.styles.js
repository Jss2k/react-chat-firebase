import styled from 'styled-components'

export const ChatInputContainer = styled.div`
  padding: 0 2rem 2rem;
`

export const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;

  form {
    display: flex;
    height: 4rem;
    align-items: center;
    padding-left: 1rem;

    input {
      flex: 1;
      border: none;
      font-size: 1.5rem;
      background: #15456f;
    }

    input:focus {
      outline: none;
    }
  }
`

export const SendButton = styled.div`
  background: #0b0c21;
  border-radius: 2px;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #001b31;
  }

  .MuiSvgIcon-root {
    width: 2rem;
    fill: #15456f;
  }
`