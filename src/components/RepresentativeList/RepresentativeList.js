import Representative from '../Representative/Representative'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const StyledRepresentativeList = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: auto;
  row-gap: 1.5rem;
`
export default function RepresentativeList({ reps, officeType }) {
  let renderedReps = reps.map(rep => {
    return <Representative key={uuidv4()} repData={rep} />
  })
  return (
    <div>
      <StyledRepresentativeList>{renderedReps}</StyledRepresentativeList>
    </div>
  )
}
