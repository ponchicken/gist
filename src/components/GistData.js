import React from 'react'
import Editor from 'react-simple-code-editor'
import Prism from 'prismjs'

export default ({ gist, updateGist, changeFileData, getFileData, fileAdd }) => {
  function getFile (filename) {
    let file = gist.files[filename]
    let filelang = (file.language) ? file.language.toLowerCase() : 'clike'
    let lang = (Prism.languages.hasOwnProperty(filelang)) ? filelang : 'clike'
    let content = getFileData(filename) || ''
       

    return (
      <div key={filename} className="gist-file">
        <h3>{filename}</h3>
        <Editor
          className="gist-editor"
          value={content}
          onValueChange={changeFileData(filename)} 
          highlight={code => {
            return Prism.highlight(code, Prism.languages[lang])
          }}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
          }}
        />
      </div>
    )
  }

  function getFiles () {
    const result = Object.keys(gist.files).map(filename => {
      return getFile(filename)
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
