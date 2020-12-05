import styled from 'styled-components'

const StyledNavBar = styled.ul`
  list-style: none;
`
export default function NavBar() {
  return (
    <StyledNavBar data-testid="nav-bar">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
    </StyledNavBar>
  )
}