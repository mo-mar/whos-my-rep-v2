export const sortRepsByOfficeType = representatives => {
  let isProvincialReps = ['mla', 'mpp', 'mna']
  let isMayor = 'mayor'
  let isMaire = 'maire'
  let isMP = 'mp'

  let sortedRepresentatives = {
    Federal: [],
    Provincial: [],
    Mayor: [],
    Municipal: [],
  }

  representatives.forEach(rep => {
    let officeType = rep.elected_office.toLowerCase()

    if (isProvincialReps.includes(officeType)) {
      sortedRepresentatives.Provincial.push(rep)
      return
    } else if (officeType === isMayor || officeType === isMaire) {
      sortedRepresentatives.Mayor.push(rep)
      return
    } else if (officeType === isMP) {
      sortedRepresentatives.Federal.push(rep)
      return
    } else {
      sortedRepresentatives.Municipal.push(rep)
      return
    }
  })

  return sortedRepresentatives
}
