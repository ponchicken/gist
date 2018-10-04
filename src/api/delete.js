import { prepareJsonFetch } from './index'

const deleteData = prepareJsonFetch('DELETE')

export const deleteGist = id => deleteData(`/gists/${id}`)()