import React from 'react'
import GistFile from './GistFile'

export default ({ gist, updateGist, changeFileData, getFileData, fileAdd }) => {


  function getFiles () {
    const result = Object.keys(gist.files).map((filename, i) => {
      return <GistFile 
        key={i}  
        files={gist.files}
        filename={filename}
      />
    })
    return result
  }

  const onFileAdd = gist => e => {
    console.log('Adding file')
    fileAdd(gist)
  }

  return (
    <div className="gist">
      <h3>{gist.description}</h3>
      <div>
        {getFiles()}
      </div>
      <div className="gist-actions">
        <button className="btn" onClick={onFileAdd(gist)}>Add file</button>
        <button className="btn gist-submit" onClick={updateGist(gist)}>Submit</button>
      </div>
    </div>
  )

}
