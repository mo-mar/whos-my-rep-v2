import styled from 'styled-components'

const StyledNavBar = styled.ul`
  list-style: none;
`

export default function NavBar() {
  return (
    <StyledNavBar data-testid="nav-bar">
      <li>Home</li>
      <li>About</li>
    </StyledNavBar>
  )
}
