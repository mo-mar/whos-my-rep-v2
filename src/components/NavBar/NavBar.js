import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const StyledNavBar = styled.ul`
  align-self: flex-end;
`
export default function NavBar() {
  return (
    <StyledNavBar data-testid="nav-bar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </StyledNavBar>
  )
}
