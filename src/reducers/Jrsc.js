import {
    CHANGE_JR_SHICI_RESP,
    COLLECT_JR_SHICI,
    PREV_JR_SHICI,
    NEXT_JR_SHICI,
    JR_SHICI_DETAIL
} from '../actions/Jrsc'

const jrshiciData = {
    'id': '5b8b9572e116fb3714e71b58',
    'content': '峨眉山月还送君，风吹西到长安陌。',
    'popularity': 410000,
    'origin': {
        'title': '峨眉山月歌送蜀僧晏入中京',
        'dynasty': '唐代',
        'author': '李白',
        'content': ['我在巴东三峡时，西看明月忆峨眉。', '月出峨眉照沧海，与人万里长相随。', '黄鹤楼前月华白，此中忽见峨眉客。', '峨眉山月还送君，风吹西到长安陌。', '长安大道横九天，峨眉山月照秦川。', '黄金狮子乘高座，白玉麈尾谈重玄。', '我似浮云殢吴越，君逢圣主游丹阙。', '一振高名满帝都，归时还弄峨眉月。'],
        'translate': null
    },
    'matchTags': ['长安', '西北', '晚上'],
    'recommendedReason': '',
    'cacheAt': '2019-01-07T23:44:46.562036',
    'collect': false,
    'orderNumber': 0
};

const intlState = {
    'jrshiciData': jrshiciData,
    'allJrShiciList': [jrshiciData],
    'itemDetail': {}
}

export default function jrshici(state = intlState, action) {
    switch (action.type) {
        case CHANGE_JR_SHICI_RESP:
            const { jrshiciData } = action;
            const { allJrShiciList } = state;
            jrshiciData['collect'] = false;
            jrshiciData['orderNumber'] = allJrShiciList.length;
            allJrShiciList.push(jrshiciData);
            return {
                ...state,
                jrshiciData,
                allJrShiciList
            }
        case COLLECT_JR_SHICI:
            const { index: jrshiciIndex } = action;
            const { jrshiciData: jrshici, allJrShiciList: allJrShici } = state;
            jrshici['collect'] = !jrshici['collect'];
            allJrShici[jrshiciIndex] = jrshici;
            return {
                ...state,
                jrshiciData: jrshici,
                allJrShiciList: allJrShici
            }
        case PREV_JR_SHICI:
            const { index: prevJrShiciIndex } = action;
            const { allJrShiciList: jrShiciListPrev } = state;
            return {
                ...state,
                jrshiciData: jrShiciListPrev[prevJrShiciIndex]
            }
        case NEXT_JR_SHICI:
            const { index: nextJrShiciIndex } = action;
            const { allJrShiciList: jrshiciListNext } = state;
            return {
                ...state,
                jrshiciData: jrshiciListNext[nextJrShiciIndex]
            }
        case JR_SHICI_DETAIL:
            const { item } = action;
            return {
                ...state,
                itemDetail: item
            }
        default:
            return state
    }
}
