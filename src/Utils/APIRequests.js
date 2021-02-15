import * as secrets from '../secrets.json'
import axios from 'axios'

/**
 * Function to retrieve political representatived with user's postal code, which first retrieves latitude and longitude with getCoordinates() for more accurate results.
 * @param {*} postalCode
 *@returns {array} - array of political representatives for given latitude and longitude
 */

export async function getRepresentatives(postalCode) {
  let { lat, lng } = await getCoordinates(postalCode)

  let url
  // temporary workaround for CORS in local development
  // http(s)://thingproxy.freeboard.io/fetch/
  // https://cors-anywhere.herokuapp.com
  if (window.location.host === 'localhost:3000') {
    url =
      'https://thingproxy.freeboard.io/fetch/https://represent.opennorth.ca/representatives'
  } else {
    url = 'https://represent.opennorth.ca/representatives'
  }

  try {
    let response = await axios.get(url, {
      method: 'GET',
      dataResponse: 'JSON',
      params: {
        point: `${lat}, ${lng}`,
        limit: 100,
      },
    })
    if (response && response.data.objects) {
      return response.data.objects
    }
  } catch (error) {
    return error
  }
}

/**
 * Function that returns user's latitude and longitude. Mainly used to provide more accurate results than postal code.
 * @param {*} postalCode
 */

export async function getCoordinates(postalCode) {
  try {
    let response = await axios.get(
      `http://www.mapquestapi.com/geocoding/v1/address`,
      {
        method: 'GET',
        dataResponse: 'JSON',
        params: {
          key: secrets.APIKEY,
          location: postalCode,
        },
      }
    )
    if (response && response.data.results[0].locations[0]) {
      return {
        lat: response.data.results[0].locations[0].latLng.lat,
        lng: response.data.results[0].locations[0].latLng.lng,
      }
    }
  } catch (error) {
    console.log(error)
  }
}
