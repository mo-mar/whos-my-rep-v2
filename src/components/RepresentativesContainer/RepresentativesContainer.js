import { sortRepsByOfficeType } from '../../Utils/SortRepsByOfficeType'
import RepresentativeList from '../RepresentativeList/RepresentativeList'
import Button from '../Button/Button'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import { useState } from 'react'

const StyledRepContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-row-gap: 1rem;
  justify-items: center;
  width: 100%;
`

const StyledOfficeButtons = styled.div`
  display: flex;
  column-gap: 0.2rem;
`
export default function RepresentativesContainer({ representatives }) {
  const [selectedOffice, setSelectedOffice] = useState('')
  const sortedReps = sortRepsByOfficeType(representatives)
  const officeTypes = Object.keys(sortedReps)

  const officeButtons = officeTypes.map(type => {
    return (
      <Button key={uuidv4()} onClick={() => setSelectedOffice(type)}>
        <span>{type}</span>
        <span> ({sortedReps[type].length})</span>
      </Button>
    )
  })

  return (
    <StyledRepContainer>
      <h3>Select a level of government</h3>
      {representatives ? (
        <StyledOfficeButtons>{officeButtons}</StyledOfficeButtons>
      ) : null}
      {representatives &&
      selectedOffice &&
      sortedReps[selectedOffice].length ? (
        <RepresentativeList
          officeType={selectedOffice}
          reps={sortedReps[selectedOffice]}
          key={uuidv4()}
        />
      ) : null}
    </StyledRepContainer>
  )
}
