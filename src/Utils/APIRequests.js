import * as secrets from '../secrets.json'
import axios from 'axios'

export async function getRepresentatives(postalCode) {
  let { lat, lng } = await getCoordinates(postalCode)

  let url
  // temporary workaround for local development
  if (window.location.host === 'localhost:3000') {
    url =
      'https://cors-anywhere.herokuapp.com/https://represent.opennorth.ca/representatives'
  } else {
    url = 'https://represent.opennorth.ca/representatives'
  }

  let response = await axios.get(url, {
    method: 'GET',
    dataResponse: 'JSON',
    params: {
      point: `${lat}, ${lng}`,
    },
  })

  if (response && response.data.objects) {
    console.log(response)
    return response.data.objects
  }
}

export async function getCoordinates(postalCode) {
  let response = await axios
    .get(`http://www.mapquestapi.com/geocoding/v1/address`, {
      method: 'GET',
      dataResponse: 'JSON',
      params: {
        key: secrets.APIkey,
        location: postalCode,
      },
    })
    .catch(error => {
      console.log(error)
    })
  if (response && response.data.results[0].locations[0]) {
    return {
      lat: response.data.results[0].locations[0].latLng.lat,
      lng: response.data.results[0].locations[0].latLng.lng,
    }
  }
}
