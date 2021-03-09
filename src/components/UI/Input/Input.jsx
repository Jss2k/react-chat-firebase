import { StyledInput } from './Signin.styles'

const Input = ({ handleChange, label, ...otherProps }) => {
  return (
    <StyledInput>
      {label && (
        <label>
          {label}
        </label>
      )}

      <input className="input" onChange={handleChange} {...otherProps} />
    </StyledInput>
  )
}

export default Input