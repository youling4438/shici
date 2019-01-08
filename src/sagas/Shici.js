import { put, takeEvery, call } from 'redux-saga/effects'
import { CHANGE_SHICI_RESP, CHANGE_SHICI } from '../actions/Shici'
import shiciApi from '../services/shici'

function getShici() {
    return shiciApi.get().then(resp => resp)
}

export function* changeShici() {
    const defaultShici = '纵使晴明无雨色，入云深处亦沾衣'
    try {
        const data = yield call(getShici);
        const shiciData = JSON.parse(data);
        yield put({ type: CHANGE_SHICI_RESP, shiciData });
    } catch (error) {
        yield put({ type: CHANGE_SHICI_RESP, defaultShici });
    }
}

export default function* shici() {
    yield takeEvery(CHANGE_SHICI, changeShici)
}