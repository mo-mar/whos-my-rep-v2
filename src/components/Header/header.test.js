import { render, screen } from '@testing-library/react'
import Header from './Header'

test('header renders', () => {
  render(<Header />)
  debugger
  expect(screen.getByTestId('header')).toBeTruthy()
  expect(screen.getByTestId('header')).toHaveTextContent(`Who's My Rep?`)
})
