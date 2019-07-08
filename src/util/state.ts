import mutate from '@/state'

import api from '@/util/api'
import { raise, tap } from '@/util/promise'
import { secondsFromNow } from '@/util/time'

const DEFAULT_CACHE_TTL = 15

interface Options {
  cacheKey?: string,
  cacheSecs?: number,
  path?: string
  responseKey?: string
  stateKey?: string
}

export const create = (name: string, opts: Options = {}) => {
  const stateKey = opts.stateKey || name
  const responseKey = opts.responseKey || name
  const path = opts.path || `/${name}s`
  const shouldCache = !!opts.cacheKey
  const cacheSecs = opts.cacheSecs || DEFAULT_CACHE_TTL

  return (body = {}) => {
    mutate(state => {
      state[stateKey].isLoading = true
    })

    return api.post(path, { body })
      .then(tap(response => mutate(state => {
        state[stateKey].isLoading = false
        state[stateKey][responseKey] = response[responseKey]

        if (shouldCache) {
          state[stateKey].cacheKey = response[responseKey][opts.cacheKey]
          state[stateKey].cacheExpiresAt = secondsFromNow(cacheSecs)
        }
      })))
      .catch(raise(() => mutate(state => {
        state[stateKey].isLoading = false
      })))
  }
}

export const fetch = (name: string, opts: Options = {}) => {
  const stateKey = opts.stateKey || name
  const responseKey = opts.responseKey || name
  const path = opts.path || `/${name}s`

  return (id, params = {}) => {
    mutate(state => {
      state[stateKey].isLoading = true
    })

    return api.get(`${path}/${id}`, { params })
      .then(tap(response => mutate(state => {
        state[stateKey].isLoading = false
        state[stateKey][responseKey] = response[responseKey]
      })))
      .catch(raise(() => mutate(state => {
        state[stateKey].isLoading = false
      })))
  }
}

export const fetchList = (name, opts: Options = {}) => {
  const stateKey = opts.stateKey || `${name}List`
  const responseKey = opts.responseKey || `${name}s`
  const path = opts.path || `/${name}s`

  return (params = {}) => {
    mutate(state => {
      state[stateKey].isLoading = true
    })

    return api.get(path, { params })
      .then(tap(response => mutate(state => {
        state[stateKey].isLoading = false
        state[stateKey][responseKey] = response[responseKey]
      })))
      .catch(raise(() => mutate(state => {
        state[stateKey].isLoading = false
      })))
  }
}

export const update = (name: string, opts: Options = {}) => {
  const stateKey = opts.stateKey || name
  const responseKey = opts.responseKey || name
  const path = opts.path || `/${name}s`

  return (id, body = {}) => {
    mutate(state => {
      state[stateKey].isLoading = true
    })

    return api.put(`${path}/${id}`, { body })
      .then(tap(response => mutate(state => {
        state[stateKey].isLoading = false
        state[stateKey][responseKey] = response[responseKey]
      })))
      .catch(raise(() => mutate(state => {
        state[stateKey].isLoading = false
      })))
  }
}
