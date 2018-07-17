export default function (state = null, action) {
  switch (action.type) {
    case 'EXAMPLE':
      return [...state, action.payload]
    default:
      return state   
  }

}