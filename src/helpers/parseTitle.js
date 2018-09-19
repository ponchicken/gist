export const parseTitle = (str) => {
  let titleEndIndex = str.search(']')
  let title = (titleEndIndex !== -1) ? str.slice(1, titleEndIndex) : str.slice(0, str.length)
  let description = (titleEndIndex !== -1) ? str.slice(titleEndIndex + 1, str.length) : str.slice(0, str.length)
  let tags = str.match(/#[\w\-_]*/g)

  return {
    title: title.trim(),
    description: description.trim(),
    tags
  }
}