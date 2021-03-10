import { StyledButton } from './Button.styles'

const Button = ({ children, ...otherProps }) => {
  return (
    <StyledButton className="btn" {...otherProps}>
      {children}
    </StyledButton>
  )
}

export default Button