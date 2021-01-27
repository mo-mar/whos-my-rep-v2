import Representative from '../Representative/Representative'

export default function RepresentativeList({ reps }) {
  let renderedReps = reps.map(rep => {
    // To do: give each rep a unique id with uuid for key
    return (
      <Representative repData={rep} key={`${rep.name} + ${Math.random()}`} />
    )
  })
  return <div>{renderedReps}</div>
}
