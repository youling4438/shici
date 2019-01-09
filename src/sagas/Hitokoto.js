import { put, takeEvery, call } from 'redux-saga/effects'
import { CHANGE_HITOKOTO_RESP, CHANGE_HITOKOTO } from '../actions/Hitokoto'
import hitokotoApi from '../services/hitokoto'

function gethitokoto() {
    return hitokotoApi.get().then(resp => resp)
}

export function* changeHitokoto() {
    const defaultHitokoto = {
        'id': 234,
        'hitokoto': '没有谁能够永远坚强下去的，每个人都会有疲累的无法站起的时候。世间的故事，就是为了这一刻而存在的哦。',
        'type': 'a',
        'from': '文学少女',
        'creator': '酱七',
        'created_at': '1468605914'
    };
    try {
        const data = yield call(gethitokoto);
        const hitokotoData = JSON.parse(data);
        yield put({ type: CHANGE_HITOKOTO_RESP, hitokotoData });
    } catch (error) {
        yield put({ type: CHANGE_HITOKOTO_RESP, hitokotoData: defaultHitokoto });
    }
}

export default function* shici() {
    yield takeEvery(CHANGE_HITOKOTO, changeHitokoto)
}
