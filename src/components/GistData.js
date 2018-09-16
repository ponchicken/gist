import React from 'react'
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';


export default ({ gist, updateGist, changeFileData, getFileData }) => {
  console.dir(languages)
  function getFile (filename) {
    return (
      <div key={filename}>
        <h3>{filename}</h3>
        <Editor
          value={getFileData(filename)}
          onValueChange={changeFileData(filename)} 
          highlight={code => {
            console.log(code)
            return highlight(code, languages.javascript)
          }}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
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
