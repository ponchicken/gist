const apiUrl = 'https://api.github.com'

const makeUrl = path => {
  return `${apiUrl}${path}`
}

export const prepareFetch = headers => path => () => {
  console.log(headers)
  return fetch(makeUrl(path), headers)
    .then(res => {
      if (res.ok)
        return res.json()
      else 
        throw new Err(res)
    })
}


function Err(error) {
  this.name = "Error"
  this.status = error.status
  this.message = error.statusText
  this.url = error.url
}
Err.prototype = Object.create(Error.prototype)
Err.prototype.constructor = Err