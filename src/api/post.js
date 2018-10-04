import { prepareJsonPost } from './index'

const postData = prepareJsonPost('POST')

export const postAddGist = (gist) => postData(`/gists`)(gist)