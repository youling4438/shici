const intlState = {
  'shici': 'loading...'
}

export default function counter(state = intlState, action) {
  switch (action.type) {
    case 'CHANGE_SHICI_RESP':
      const { shici } = action;
      console.log(action);
      return {
        shici
      }
    default:
      return state
  }
}
