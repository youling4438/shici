import {
    CHANGE_SHICI_RESP,
    COLLECT_SHICI,
    PREV_SHICI,
    NEXT_SHICI
} from '../actions/Shici'
import {
    CHANGE_HITOKOTO_RESP,
    COLLECT_HITOKOTO,
    PREV_HITOKOTO,
    NEXT_HITOKOTO
} from '../actions/Hitokoto'

const shiciData = {
    'content': '爆竹声中一岁除，春风送暖入屠苏。',
    'origin': '元日',
    'author': '王安石',
    'category': '古诗文-节日-春节',
    'collect': false,
    'orderNumber': 0
};

const hitokotoData = {
    'id': 301,
    'hitokoto': '既不回头，何必不忘；既然无缘，何必誓言；今日种种，似水无痕。',
    'type': 'c',
    'from': '仙剑奇侠传',
    'creator': 'Sai',
    'created_at': '1468948796',
    'collect': false,
    'orderNumber': 0
};

const intlState = {
    'shici': '纵使晴明无雨色，入云深处亦沾衣',
    'shiciData': shiciData,
    'hitokotoData': hitokotoData,
    'allShiciList': [shiciData],
    'allHitokotoList': [hitokotoData],
}

export default function shici(state = intlState, action) {
    switch (action.type) {
        case CHANGE_SHICI_RESP:
            const { shiciData } = action;
            const { allShiciList } = state;
            shiciData['collect'] = false;
            shiciData['orderNumber'] = allShiciList.length;
            allShiciList.push(shiciData);
            console.table(allShiciList);
            return {
                ...state,
                shiciData,
                allShiciList
            }
        case COLLECT_SHICI:
            const { index: shiciIndex } = action;
            const { allShiciList: allList, shiciData: shici } = state;
            shici.collect = !shici.collect;
            allList[shiciIndex] = shici;
            console.table(allList);
            return {
                ...state,
                shiciData: shici,
                allShiciList: allList
            }
        case PREV_SHICI:
            const { index: prevShiciIndex } = action;
            const { allShiciList: shiciListPrev } = state;
            return {
                ...state,
                shiciData: shiciListPrev[prevShiciIndex]
            }
        case NEXT_SHICI:
            const { index: nextShiciIndex } = action;
            const { allShiciList: shiciListNext } = state;
            return {
                ...state,
                shiciData: shiciListNext[nextShiciIndex]
            }
        case CHANGE_HITOKOTO_RESP:
            const { hitokotoData } = action;
            const { allHitokotoList } = state;
            hitokotoData['collect'] = false;
            hitokotoData['orderNumber'] = allHitokotoList.length;
            allHitokotoList.push(hitokotoData);
            console.table(allHitokotoList);
            return {
                ...state,
                hitokotoData,
                allHitokotoList
            }
        case COLLECT_HITOKOTO:
            const { index: hitoIndex } = action;
            const { allHitokotoList: allHitoList, hitokotoData: hitokoto } = state;
            hitokoto.collect = !hitokoto.collect;
            allHitoList[hitoIndex] = hitokoto;
            console.table(allHitoList);
            return {
                ...state,
                hitokotoData: hitokoto,
                allHitokotoList: allHitoList
            }
        case PREV_HITOKOTO:
            const { index: prevHitokotoIndex } = action;
            const { allHitokotoList: hitokotoListPrev } = state;
            return {
                ...state,
                hitokotoData: hitokotoListPrev[prevHitokotoIndex]
            }
        case NEXT_HITOKOTO:
            const { index: nextHitokotoIndex } = action;
            const { allHitokotoList: hitokotoListNext } = state;
            return {
                ...state,
                hitokotoData: hitokotoListNext[nextHitokotoIndex]
            }
        default:
            return state
    }
}
