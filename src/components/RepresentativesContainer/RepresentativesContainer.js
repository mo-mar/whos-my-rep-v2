import { sortRepsByOfficeType } from '../../Utils/SortRepsByOfficeType'
import RepresentativeList from '../RepresentativeList/RepresentativeList'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'

const StyledRepContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 1rem;
  width: 100%;
`
export default function RepresentativesContainer({ representatives }) {
  const sortedReps = sortRepsByOfficeType(representatives)
  const officeTypes = Object.keys(sortedReps)

  const renderedRepLists = officeTypes.map(type => {
    let reps = sortedReps[type]
    if (reps.length) {
      return <RepresentativeList officeType={type} reps={reps} key={uuidv4()} />
    }
  })

  return <StyledRepContainer>{renderedRepLists}</StyledRepContainer>
}
