const apiUrl = 'https://api.github.com'

const makeUrl = path => {
  return `${apiUrl}${path}`
}

const headers = () => ({
    Authorization: `token ${localStorage.getItem('ghtoken')}`
})

export const prepareJsonFetch = method => path => url => {
  url = url || makeUrl(path)
  console.log(url)
  return fetch(url, {
      method,
      headers: headers(),
    })
    .then(response)
}

export const prepareJsonPost = method => path => body => {
  console.log(body)
  return fetch(makeUrl(path), {
      method,
      headers: headers(),
      body: JSON.stringify( body ) 
    })
    .then(response)
}

const response = res => {
  if (res.ok)
    return res.json()
  else 
    throw new Err(res)
}

function Err(error) {
  this.name = "Error"
  this.status = error.status
  this.message = error.statusText
  this.url = error.url
}
Err.prototype = Object.create(Error.prototype)
Err.prototype.constructor = Err