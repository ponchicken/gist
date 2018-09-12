import React from 'react'

export default ({ gist, updateGist }) => {

  const changeFileData = filename => event => {
    console.log(event.target.value)
    gist.files[filename].data = event.target.value
    // return data
  }


  function getFile (filename) {
    return (
      <div key={filename}>
        <h3>{filename}</h3>
        <textarea 
          onChange={changeFileData(filename)} 
          defaultValue={gist.files[filename].data}
        ></textarea>
      </div>
    )
  }

  function getFiles () {
    return (
      Object.keys(gist.files).map(filename => {
        return getFile(filename)
      })
    )
  }

  return (
    <div>
      <h3>{gist.description}</h3>
      <div>
        {getFiles()}
      </div>
      <button onClick={updateGist(gist)}>Submit</button>
    </div>
  )

}
