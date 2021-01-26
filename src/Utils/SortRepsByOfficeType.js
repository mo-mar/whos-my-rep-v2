export const sortRepsByOfficeType = representatives => {
  let isProvincialReps = ['mla', 'mpp', 'mna']
  let isMayor = 'mayor'
  let isMaire = 'maire'
  let isMP = 'mp'

  let sortedRepresentatives = {
    federal: [],
    provincial: [],
    mayor: [],
    municipal: [],
  }

  representatives.forEach(rep => {
    let officeType = rep.elected_office.toLowerCase()

    if (isProvincialReps.includes(officeType)) {
      sortedRepresentatives.provincial.push(rep)
      return
    } else if (officeType === isMayor || officeType === isMaire) {
      sortedRepresentatives.mayor.push(rep)
      return
    } else if (officeType === isMP) {
      sortedRepresentatives.federal.push(rep)
      return
    } else {
      sortedRepresentatives.municipal.push(rep)
      return
    }
  })

  return sortedRepresentatives
}
