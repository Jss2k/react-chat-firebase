import styled from 'styled-components'

export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  input {
    width: 100%;
    color: rgb(38, 50, 56);
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 10px 20px;
    outline: none;
    box-sizing: border-box;
    border-radius: 4px;
  }

  label {
    width: 100%;
    text-align: left;
  }
`
