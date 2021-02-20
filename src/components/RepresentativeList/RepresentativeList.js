import Representative from '../Representative/Representative'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const Container = styled.div`
  width: 100%;
  height: 90vh;
  max-height: 600px;
  overflow-y: auto;
  @media (min-width: 600px) {
    width: 80%;
  }
`

const StyledRepresentativeList = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  row-gap: 1.5rem;
`

export default function RepresentativeList({ reps }) {
  let renderedReps = reps.map(rep => {
    return <Representative key={uuidv4()} repData={rep} />
  })

  return (
    <Container>
      <StyledRepresentativeList>{renderedReps}</StyledRepresentativeList>
    </Container>
  )
}
