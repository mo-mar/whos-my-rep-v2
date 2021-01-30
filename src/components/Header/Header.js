import NavBar from '../NavBar/NavBar'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`

export default function header() {
  return (
    <StyledHeader>
      <NavBar />
      <h1 data-testid="header">Who's My Rep?</h1>
      <h4>Your one-stop stop to finding your political representatives.</h4>
    </StyledHeader>
  )
}
