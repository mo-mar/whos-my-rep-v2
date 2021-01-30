import Header from '../Header/Header'
import styled from 'styled-components'

const StyledLayout = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 350px;
  padding: 1.5rem 0.5rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  grid-template-rows: auto auto 1fr;
  justify-items: center;
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
