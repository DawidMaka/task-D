import React from 'react'
import StyledButton from '../StyledComponents/StyledButton'

const NumberTwo = React.memo(({onClick, children}) => {
  return (
    <StyledButton onClick={onClick} middle>
      {children}
    </StyledButton>
  )
})

export default NumberTwo
