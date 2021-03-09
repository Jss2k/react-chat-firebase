import { StyledButton } from './Signin.styles'

const Button = ({ children, ...otherProps }) => {
  return (
    <StyledButton className="btn" {...otherProps}>
      {children}
    </StyledButton>
  )
}

export default Button