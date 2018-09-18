import { prepareJsonPost } from './index'

const patchData = prepareJsonPost('PATCH')

export const patchGist = (gist) => patchData(`/gists/${gist.id}`)(gist)