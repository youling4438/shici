const shiciData = {
  'content': '爆竹声中一岁除，春风送暖入屠苏。',
  'origin': '元日',
  'author': '王安石',
  'category': '古诗文-节日-春节'
};
const intlState = {
  'shici': '纵使晴明无雨色，入云深处亦沾衣',
  'shiciData': shiciData,
  'allShiciList': [shiciData]
}

export default function counter(state = intlState, action) {
  switch (action.type) {
    case 'CHANGE_SHICI_RESP':
      const { shiciData } = action;
      const { allShiciList } = state;
      allShiciList.push(shiciData);
      console.table(allShiciList);
      return {
        ...state,
        shiciData,
        allShiciList
      }
    default:
      return state
  }
}
