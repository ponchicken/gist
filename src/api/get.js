import { prepareFetch } from '../helpers/fetch'

const token = localStorage.getItem('ghtoken')

const getData = prepareFetch({
  method: 'GET',
  headers: {
    Authorization: `token ${token}`
  }
})

export const getUser = getData(`/user`)

export const getGists = getData(`/gists`)