import { render, screen } from '@testing-library/react'
import App from '../../App'

test('header renders', () => {
  render(<App />)
  expect(screen.getByTestId('header')).toBeTruthy()
  expect(screen.getByTestId('header')).toHaveTextContent(`Who's My Rep?`)
})
