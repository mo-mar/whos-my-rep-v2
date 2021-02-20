import { render, screen } from '@testing-library/react'
import App from '../../App'
import userEvent from '@testing-library/user-event'

test('NavBar renders', () => {
  render(<App />)
  expect(screen.getByTestId('nav-bar')).toBeTruthy()
})

test('can navigate to about page', () => {
  render(<App />)
  userEvent.click(screen.getByTestId('about-link'))
  expect(screen.getByTestId('about-container')).toBeTruthy()
})

test('can navigate to home page', () => {
  render(<App />)
  userEvent.click(screen.getByTestId('about-link'))
  expect(screen.getByTestId('about-container')).toBeTruthy()
  userEvent.click(screen.getByTestId('home-link'))
  expect(screen.queryByTestId('about-container')).toBeFalsy()
  expect(screen.getByTestId('postal-code-form')).toBeTruthy()
})
