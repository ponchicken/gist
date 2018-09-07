import { prepareJsonFetch } from './index'

const token = localStorage.getItem('ghtoken')
const headers = {
  method: 'GET',
  headers: {
    Authorization: `token ${token}`
  }
}

const getData = prepareJsonFetch(headers)

export const getUser = getData(`/user`)
export const getGists = getData(`/gists`)