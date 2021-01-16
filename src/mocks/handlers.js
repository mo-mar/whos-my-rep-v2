import { rest } from 'msw'

export const handlers = [
  // Handles a GET request
  rest.get(
    'http://www.mapquestapi.com/geocoding/v1/address',
    (req, response, context) => {
      let res = response(
        context.json({
          response: {
            data: {
              results: [
                {
                  locations: [],
                },
              ],
            },
          },
        })
      )
      return res
    }
  ),
]
