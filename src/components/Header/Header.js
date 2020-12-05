import NavBar from '../NavBar/NavBar'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export default function header() {
  return (
    <StyledHeader>
      <h1 data-testid="header">Who's My Rep?</h1>
      <NavBar />
    </StyledHeader>
  )
}
