import { render, screen, fireEvent } from '@testing-library/react'
import PostalCodeForm from './PostalCodeForm'
import userEvent from '@testing-library/user-event'
import App from '../../App'

test('PostalCodeForm renders', () => {
  render(<PostalCodeForm />)
  expect(screen.getByTestId('postal-code-form')).toBeTruthy()
})

test('form has label and input', () => {
  render(<PostalCodeForm />)
  expect(screen.getByTestId('form-label')).toBeTruthy()
  expect(screen.getByTestId('postal-code-input')).toBeTruthy()
})

test('form has label and required input', () => {
  render(<PostalCodeForm />)
  let input = screen.getByTestId('postal-code-input')
  expect(screen.getByTestId('form-label')).toBeTruthy()
  expect(input).toBeTruthy()
  expect(input.required).toBeTruthy()
})

test('error appears if postal code invalid', async () => {
  render(<App />)
  let input = screen.getByTestId('postal-code-input')
  userEvent.type(input, 'S')
  expect(screen.queryByTestId('postal-code-error')).toBeTruthy()
  userEvent.type(input, '{backspace}M4Y3C1')
  expect(screen.queryByTestId('postal-code-error')).toBeFalsy()
  userEvent.type(input, '{backspace}')
  expect(screen.queryByTestId('postal-code-error')).toBeTruthy()
})

test('form converts text to uppercase and removes spaces', async () => {
  render(<PostalCodeForm />)
  let input = screen.getByTestId('postal-code-input')
  userEvent.type(input, 'm6k{space}3p8')
  expect(input.value).toBe('M6K3P8')
})
