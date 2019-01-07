/* eslint-disable no-constant-condition */

import { put, takeEvery, call } from 'redux-saga/effects'
import { CHANGE_SHICI_RESP, CHANGE_SHICI } from '../actions/Shici'
import { CHANGE_HITOKOTO_RESP, CHANGE_HITOKOTO } from '../actions/Hitokoto'
import { CHANGE_JR_SHICI_RESP, CHANGE_JR_SHICI } from '../actions/Jrsc'
import shiciApi from '../services/shici'
import hitokotoApi from '../services/hitokoto'
import jrshiciApi from '../services/jrshici'

function getShici() {
    return shiciApi.get().then(resp => resp)
}

function gethitokoto() {
    return hitokotoApi.get().then(resp => resp)
}

function getJrShici() {
    return jrshiciApi.get().then(resp => resp)
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

export function* changeWord() {
    const defaultShici = '纵使晴明无雨色，入云深处亦沾衣'
    try {
        const data = yield call(gethitokoto);
        const hitokotoData = JSON.parse(data);
        yield put({ type: CHANGE_HITOKOTO_RESP, hitokotoData });
    } catch (error) {
        yield put({ type: CHANGE_HITOKOTO_RESP, defaultShici });
    }
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
    yield takeEvery(CHANGE_SHICI, changeShici)
    yield takeEvery(CHANGE_HITOKOTO, changeWord)
    yield takeEvery(CHANGE_JR_SHICI, changeJrShici)
}
