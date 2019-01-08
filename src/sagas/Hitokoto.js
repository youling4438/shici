import { put, takeEvery, call } from 'redux-saga/effects'
import { CHANGE_HITOKOTO_RESP, CHANGE_HITOKOTO } from '../actions/Hitokoto'
import hitokotoApi from '../services/hitokoto'

function gethitokoto() {
    return hitokotoApi.get().then(resp => resp)
}

export function* changeHitokoto() {
    const defaultShici = '纵使晴明无雨色，入云深处亦沾衣'
    try {
        const data = yield call(gethitokoto);
        const hitokotoData = JSON.parse(data);
        yield put({ type: CHANGE_HITOKOTO_RESP, hitokotoData });
    } catch (error) {
        yield put({ type: CHANGE_HITOKOTO_RESP, defaultShici });
    }
}

export default function* shici() {
    yield takeEvery(CHANGE_HITOKOTO, changeHitokoto)
}