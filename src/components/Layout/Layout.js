import Header from '../Header/Header'
import styled from 'styled-components'

const StyledLayout = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 350px;
  padding: 1.5rem 1.5rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  grid-template-rows: auto auto 1fr;
  justify-items: center;
  transition: all 0.5s ease-in;

  @media (min-width: 400px) {
    max-width: 600px;
  }
  @media (min-width: 800px) {
    max-width: 1200px;
    grid-template-columns: ${props =>
      props.hasLoadedReps ? '0.8fr 1fr' : '1fr'};
    grid-column-gap: 1rem;
    grid-template-rows: minmax(auto, 150px) 1fr;
    padding: 2rem;
    Header {
      align-self: flex-start;
      grid-row: 1;
      grid-column: 1;
    }
  }
`

export default function Layout({ children, reps }) {
  return (
    <StyledLayout
      hasLoadedReps={reps?.length ? true : false}
      data-testid="layout-container"
    >
      <Header />
      {children}
    </StyledLayout>
  )
}
