import {
    CHANGE_HITOKOTO_RESP,
    COLLECT_HITOKOTO,
    PREV_HITOKOTO,
    NEXT_HITOKOTO
} from '../actions/Hitokoto'

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
    'hitokotoData': hitokotoData,
    'allHitokotoList': [hitokotoData]
}

export default function hitokoto(state = intlState, action) {
    switch (action.type) {
        case CHANGE_HITOKOTO_RESP:
            const { hitokotoData } = action;
            const { allHitokotoList } = state;
            hitokotoData['collect'] = false;
            hitokotoData['orderNumber'] = allHitokotoList.length;
            allHitokotoList.push(hitokotoData);
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
