import {
    CHANGE_JR_SHICI_RESP,
    COLLECT_JR_SHICI
} from '../actions/Jrsc'

const jrshiciData = {
    'id': '5b8b9572e116fb3714e6fba0',
    'content': '姑苏城外寒山寺，夜半钟声到客船。',
    'popularity': 1630000,
    'origin': {
        'title': '枫桥夜泊',
        'dynasty': '唐代',
        'author': '张继',
        'content': ['月落乌啼霜满天，江枫渔火对愁眠。', '姑苏城外寒山寺，夜半钟声到客船。'],
        'translate': ['月亮已落下乌鸦啼叫寒气满天， 对着江边枫树和渔火忧愁而眠。', '姑苏城外那寂寞清静寒山古寺， 半夜里敲钟的声音传到了客船。']
    },
    'matchTags': ['晚上', '寒冷'],
    'recommendedReason': '',
    'cacheAt': '2019-01-06T21:47:06.869781',
    'collect': false,
    'orderNumber': 0
};

const intlState = {
    'jrshiciData': jrshiciData,
    'allJrShiciList': [jrshiciData]
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
        default:
            return state
    }
}
