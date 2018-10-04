import React from 'react'
import Editor from 'react-simple-code-editor'
import Prism from 'prismjs'

export default ({ file, filename, onFileRename, onFileRemove, onFileContentChange }) => {

  let filelang = (file && file.language) ? file.language.toLowerCase() : 'clike'
  let lang = (Prism.languages.hasOwnProperty(filelang)) ? filelang : 'clike'

  return (
    <div className="gist-file" >
      <div className="gist-file-top">
        <input
          className="gist-file-name"
          data-name={filename}
          value={file.filename}
          onChange={onFileRename(filename)}
        />
        <button 
          className="gist-file-remove btn"
          title="remove file"
          onClick={onFileRemove(filename)}
        >remove file</button>
      </div>
      <Editor
        className="gist-editor"
        value={file.content}
        onValueChange={onFileContentChange(filename)} 
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
