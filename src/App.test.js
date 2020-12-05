import { render, screen } from '@testing-library/react'
import App from './App'

test('App renders', () => {
  render(<App />)
  expect(screen.getByTestId('header')).toBeTruthy()
})

test('Home page has nav bar', () => {
  render(<App />)
  expect(screen.getByTestId('nav-bar')).toBeTruthy()
})
