import { put, takeEvery, call } from 'redux-saga/effects'
import { CHANGE_JR_SHICI_RESP, CHANGE_JR_SHICI } from '../actions/Jrsc'
import jrshiciApi from '../services/jrshici'

function getJrShici() {
    return jrshiciApi.get().then(resp => resp)
}

export function* changeJrShici() {
    const defaultShici = '纵使晴明无雨色，入云深处亦沾衣'
    try {
        const data = yield call(getJrShici);
        const { data: jrshiciData } = JSON.parse(data);
        yield put({ type: CHANGE_JR_SHICI_RESP, jrshiciData });
    } catch (error) {
        yield put({ type: CHANGE_JR_SHICI_RESP, jrshiciData });
    }
}

export default function* rootSaga() {
    yield takeEvery(CHANGE_JR_SHICI, changeJrShici)
}
