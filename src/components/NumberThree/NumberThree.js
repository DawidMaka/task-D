import StyledButton from '../StyledComponents/StyledButton'

const NumberThree = ({onClick, children}) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default NumberThree
