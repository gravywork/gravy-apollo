import 'whatwg-fetch'

import qs from 'querystring'

import ls from '@/util/localstore'

export const BASE_URL = 'http://0.0.0.0:3000/api'

const responseHandler = (response: Response) => {
  if (response.status < 300) return response.json()
  throw response
}

const get = (url: string, config: object = {}) => (
  fetch(`${BASE_URL}${url}?${qs.stringify(config.params)}`, {
    ...config,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${ls.get('token')}`,
      ...config.headers
    }
  })
    .then(responseHandler)
)

const post = (url: string, config: object = {}) => (
  fetch(`${BASE_URL}${url}`, {
    ...config,
    body: JSON.stringify(config.body),
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${ls.get('token')}`,
      'Content-Type': 'application/json',
      ...config.headers
    },
    method: 'POST'
  })
    .then(responseHandler)
)

const del = (url: string, config: object = {}) => (
  fetch(`${BASE_URL}${url}`, {
    ...config,
    body: JSON.stringify(config.body),
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${ls.get('token')}`,
      'Content-Type': 'application/json',
      ...config.headers
    },
    method: 'DELETE'
  })
    .then(responseHandler)
)

export default {
  del,
  get,
  post
}
