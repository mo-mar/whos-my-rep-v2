import { render, screen } from '@testing-library/react'
import Layout from './Layout'

test('Layout renders', () => {
  render(<Layout />)
  expect(screen.getByTestId('layout-container')).toBeTruthy()
})

test('Layout renders header and children', () => {
  let dummyDiv = <div>dummy div</div>
  render(<Layout>{dummyDiv}</Layout>)
  let container = screen.getByTestId('layout-container')
  let header = screen.getByTestId('header')
  expect(container).toHaveTextContent('dummy div')
  expect(header).toBeTruthy()
})
