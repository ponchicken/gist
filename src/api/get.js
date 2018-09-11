import { prepareJsonFetch } from './index'

const getData = prepareJsonFetch('GET')

export const getUser = getData(`/user`)
export const getGists = getData(`/gists`)