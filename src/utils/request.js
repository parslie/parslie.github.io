import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL 
  ? process.env.REACT_APP_BASE_URL 
  : 'https://parslie-server.herokuapp.com'

function request(config) {
  const isFullUrl = /^https?:\/\//
  const url = isFullUrl.test(config.endpoint)
    ? config.endpoint
    : BASE_URL + config.endpoint

  const token = window.localStorage.getItem('token')
  const oldHeaders = config.headers ? config.headers : {}
  const headers = config.useToken 
    ? { ...oldHeaders, Authorization: `Token ${token}` } 
    : { ...oldHeaders }

  return axios({ ...config, headers, url })
}

export const get = (endpoint, useToken = false, config = {}) =>
  request({ ...config, method: 'get', endpoint, useToken })
export const del = (endpoint, useToken = false, config = {}) =>
  request({ ...config, method: 'delete', endpoint, useToken })
export const head = (endpoint, useToken = false, config = {}) =>
  request({ ...config, method: 'head', endpoint, useToken })
export const options = (endpoint, useToken = false, config = {}) =>
  request({ ...config, method: 'options', endpoint, useToken })
export const post = (endpoint, data = {}, useToken = false, config = {}) =>
  request({ ...config, data, method: 'post', endpoint, useToken })
export const put = (endpoint, data = {}, useToken = false, config = {}) =>
  request({ ...config, data, method: 'put', endpoint, useToken })
export const patch = (endpoint, data = {}, useToken = false, config = {}) =>
  request({ ...config, data, method: 'patch', endpoint, useToken })
