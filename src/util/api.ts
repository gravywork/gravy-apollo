import 'whatwg-fetch'

import qs from 'querystring'

import ls, { AUTH_KEY } from '@/util/localstore'
import { deepTransformKeys } from '@/util/object'
import { toCamelCase, toSnakeCase } from '@/util/text'

import { API_BASE_URL } from '@/settings'

const responseHandler = (response: Response) => {
  if (response.status < 300) {
    return response.json()
      .then(body => deepTransformKeys(body, toCamelCase))
  }
  throw response
}

const defaultHeaders = () => ({
  'Accept': 'application/json',
  'Authorization': `Bearer ${ls.get(AUTH_KEY)}`
})

const parseBody = (body: any) => {
  if (!body) {
    return ({ body: undefined, bodyHeaders: {} })
  }

  if (body.toString() === '[object FormData]') {
    return ({
      body,
      bodyHeaders: {} // automatically set by browser
    })
  }

  return ({
    body: JSON.stringify(deepTransformKeys(body, toSnakeCase)),
    bodyHeaders: {
      'Content-Type': 'application/json'
    }
  })
}

const request = (method) => (url, config = {}) => {
  const { body, bodyHeaders } = parseBody(config.body)
  const params = qs.stringify(config.params)

  return fetch(`${API_BASE_URL}${url}?${params}`, {
    method,
    body,
    headers: {
      ...defaultHeaders(),
      ...config.headers,
      ...bodyHeaders
    }
  })
    .then(responseHandler)
}

export default {
  del: request('DELETE'),
  get: request('GET'),
  post: request('POST'),
  put: request('PUT')
}
