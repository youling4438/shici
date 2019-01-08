import {
    CHANGE_SHICI_RESP,
    COLLECT_SHICI,
    PREV_SHICI,
    NEXT_SHICI
} from '../actions/Shici'

const shiciData = {
    'content': '爆竹声中一岁除，春风送暖入屠苏。',
    'origin': '元日',
    'author': '王安石',
    'category': '古诗文-节日-春节',
    'collect': false,
    'orderNumber': 0
};

const intlState = {
    'shiciData': shiciData,
    'allShiciList': [shiciData]
}

export default function shici(state = intlState, action) {
    switch (action.type) {
        case CHANGE_SHICI_RESP:
            const { shiciData } = action;
            const { allShiciList } = state;
            shiciData['collect'] = false;
            shiciData['orderNumber'] = allShiciList.length;
            allShiciList.push(shiciData);
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
        default:
            return state
    }
}