import { render, screen } from '@testing-library/react'
import Layout from './Layout'
import App from '../../App'
import { BrowserRouter as Router } from 'react-router-dom'

test('Layout renders', () => {
  render(<App />)
  expect(screen.getByTestId('layout-container')).toBeTruthy()
})

test('Layout renders header and children', () => {
  let dummyDiv = <div>dummy div</div>
  render(
    <Router>
      <Layout>{dummyDiv}</Layout>
    </Router>
  )
  let container = screen.getByTestId('layout-container')
  let header = screen.getByTestId('header')
  expect(container).toHaveTextContent('dummy div')
  expect(header).toBeTruthy()
})
