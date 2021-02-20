import axios from 'axios'

/**
 * Function to retrieve political representatived with user's postal code, which first retrieves latitude and longitude with getCoordinates() for more accurate results.
 * @param {*} postalCode
 *@returns {array} - array of political representatives for given latitude and longitude
 */

export async function getRepresentatives(postalCode) {
  try {
    let { lat, lng } = await getCoordinates(postalCode)
    let latAndLng = `${lat},${lng}`
    let response = await axios({
      method: 'GET',
      url: 'https://proxy.hackeryou.com',
      dataResponse: 'json',
      params: {
        reqUrl: `https://represent.opennorth.ca/representatives/?point=${latAndLng}`,
      },
      xmlToJSON: false,
    })
    // let response = await axios({
    //   method: 'GET',
    //   dataResponse: 'JSON',
    //   url: 'https://proxy.hackeryou.com',
    //   params: {
    //     reqUrl: `https://represent.opennorth.ca/representatives/`,
    //     point: `${lat}, ${lng}`,
    //     limit: 100,
    //   },
    // })
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
      `https://www.mapquestapi.com/geocoding/v1/address`,
      {
        method: 'GET',
        dataResponse: 'JSON',
        params: {
          key: process.env.REACT_APP_MAPQUEST_KEY,
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
    alert(error)
  }
}
