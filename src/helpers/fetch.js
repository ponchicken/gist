const apiUrl = 'https://api.github.com'

const makeUrl = path => {
  return `${apiUrl}${path}`
}

export const prepareFetch = headers => path => cb => {
  console.log(headers)
  fetch(makeUrl(path), headers )
    .then(res => res.json())
    .then(data => cb(data))
}