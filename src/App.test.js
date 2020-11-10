import { render, screen } from '@testing-library/react'
import App from './App'

test('App renders', () => {
  render(<App />)
  expect(screen.getByTestId('app-header')).toBeTruthy()
})
