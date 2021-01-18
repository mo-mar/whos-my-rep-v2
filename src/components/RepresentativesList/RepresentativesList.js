export default function RepresentativesList({ representativeData }) {
  if (!representativeData) {
    return
  }
  let renderedRepresentatives = representativeData.map(representative => {
    return (
      // To do: give each rep a unique id with uuid for key
      <div key={`${representative.name} + ${Math.random()}`}>
        <h1>{representative.name}</h1> -{' '}
        <span>{representative.elected_office}</span> -
        <span>{representative.representative_set_name}</span>
      </div>
    )
  })
  return <div>{renderedRepresentatives}</div>
}
