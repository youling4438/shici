const intlState = {
  'shici': '纵使晴明无雨色，入云深处亦沾衣'
}

export default function counter(state = intlState, action) {
  switch (action.type) {
    case 'CHANGE_SHICI_RESP':
      const { shici } = action;
      return {
        shici
      }
    default:
      return state
  }
}
