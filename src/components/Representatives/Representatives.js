import { render } from 'react-dom'
import { sortRepsByOfficeType } from '../../Utils/SortRepsByOfficeType'
import RepresentativeList from '../RepresentativeList/RepresentativeList'
export default function RepresentativesList({ representatives }) {
  const sortedReps = sortRepsByOfficeType(representatives)
  const keys = Object.keys(sortedReps)

  const renderedRepLists = keys.map(key => {
    let officeType = key
    let reps = sortedReps[key]
    return (
      <div key={`${reps.length} + ${Math.random()}`}>
        <div>HERE ARE THE {officeType} reps:</div>
        <RepresentativeList reps={reps} />
      </div>
    )
  })

  return <div>{renderedRepLists}</div>
}
