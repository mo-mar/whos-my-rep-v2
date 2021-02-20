import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavBar = styled.ul`
  align-self: flex-end;
`
export default function NavBar() {
  return (
    <StyledNavBar data-testid="nav-bar">
      <li>
        <Link to="/" data-testid="home-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" data-testid="about-link">
          About
        </Link>
      </li>
    </StyledNavBar>
  )
}
