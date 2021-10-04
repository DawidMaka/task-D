import StyledButton from '../StyledComponents/StyledButton'

const NumberOne = ({onClick, children}) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default NumberOne
