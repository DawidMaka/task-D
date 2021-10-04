import styled from 'styled-components'

const StyledButton = styled.button.attrs(props => ({
  type: "button"
}))`
  margin: ${({ middle }) => (middle ? '25px 10px 15px;' : '0 10px 40px;')};
`

export default StyledButton