import styled from 'styled-components'

export const StyledInput = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 100%;
    color: rgb(38, 50, 56);
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 1px;
    border-color: #55abee;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgb(0, 0, 0, 0.2);
  }

  label {
    width: 100%;
    text-align: left;
  }
`