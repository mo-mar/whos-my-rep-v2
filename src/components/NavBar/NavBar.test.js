import { render, screen } from '@testing-library/react'
import NavBar from './NavBar'

test('NavBar renders', () => {
  render(<NavBar />)
  expect(screen.getByTestId('nav-bar')).toBeTruthy()
})
