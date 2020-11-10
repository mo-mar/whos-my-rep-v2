import Header from '../Header/Header'
import styled from 'styled-components'

const StyledLayout = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  @media (min-width: 400px) {
    max-width: 800px;
  }
  @media (min-width: 800px) {
    max-width: 1000px;
  }
`

export default function Layout({ children }) {
  return (
    <StyledLayout data-testid="layout-container">
      <Header />
      {children}
    </StyledLayout>
  )
}
