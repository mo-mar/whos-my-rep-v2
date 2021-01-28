import Representative from '../Representative/Representative'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const StyledRepresentativeList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: auto;
  border: 2px solid blue;
`
export default function RepresentativeList({ reps, officeType }) {
  let renderedReps = reps.map(rep => {
    return <Representative key={uuidv4()} repData={rep} />
  })
  return (
    <StyledRepresentativeList>
      {reps.length ? <h2>{officeType}:</h2> : null}
      <ul>{renderedReps}</ul>
    </StyledRepresentativeList>
  )
}
