import { CHANGE_SHICI_RESP } from '../actions/Shici'
import { CHANGE_WORD_RESP } from '../actions/Hitokoto'
const shiciData = {
  'content': '爆竹声中一岁除，春风送暖入屠苏。',
  'origin': '元日',
  'author': '王安石',
  'category': '古诗文-节日-春节'
};

const hitokotoData = {
  'id': 301,
  'hitokoto': '既不回头，何必不忘；既然无缘，何必誓言；今日种种，似水无痕。',
  'type': 'c',
  'from': '仙剑奇侠传',
  'creator': 'Sai',
  'created_at': '1468948796'
};

const intlState = {
  'shici': '纵使晴明无雨色，入云深处亦沾衣',
  'shiciData': shiciData,
  'hitokotoData': hitokotoData,
  'allShiciList': [shiciData],
  'allHitokotoList': [hitokotoData],
}

export default function counter(state = intlState, action) {
  switch (action.type) {
    case CHANGE_SHICI_RESP:
      const { shiciData } = action;
      const { allShiciList } = state;
      allShiciList.push(shiciData);
      console.table(allShiciList);
      return {
        ...state,
        shiciData,
        allShiciList
      }
    case CHANGE_WORD_RESP:
      const { hitokotoData } = action;
      const { allHitokotoList } = state;
      allHitokotoList.push(hitokotoData);
      console.table(allHitokotoList);
      return {
        ...state,
        hitokotoData,
        allHitokotoList
      }
    default:
      return state
  }
}
