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
  @media (min-width: 400px) {
    max-width: 600px;
  }
  @media (min-width: 800px) {
    max-width: 1200px;
    grid-template-columns: ${props =>
      props.didLoadRepresentatives ? '0.8fr 0.8fr' : '1fr'};
    grid-column-gap: 1rem;
    transition: all 0.5s ease-in;
    grid-template-rows: minmax(auto, 150px) 1fr;
    padding: 2rem;
    Header {
      align-self: flex-start;
      grid-row: 1;
      grid-column: 1;
    }
  }
`

export default function Layout({ children }) {
  const didLoadRepresentatives = children => {
    return children.some(child =>
      child?.type?.name?.includes('RepresentativesContainer')
    )
  }

  return (
    <StyledLayout
      didLoadRepresentatives={didLoadRepresentatives(children)}
      data-testid="layout-container"
    >
      <Header />
      {children}
    </StyledLayout>
  )
}
