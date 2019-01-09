import { put, takeEvery, call } from 'redux-saga/effects'
import { CHANGE_SHICI_RESP, CHANGE_SHICI } from '../actions/Shici'
import shiciApi from '../services/shici'

function getShici() {
    return shiciApi.get().then(resp => resp)
}

export function* changeShici() {
    const defaultShici = {
        'content': '山黛远，月波长，暮云秋影蘸潇湘。',
        'origin': '鹧鸪天·赏荷',
        'author': '蔡松年',
        'category': '古诗文-四季-秋天'
    };
    try {
        const data = yield call(getShici);
        const shiciData = JSON.parse(data);
        yield put({ type: CHANGE_SHICI_RESP, shiciData });
    } catch (error) {
        yield put({ type: CHANGE_SHICI_RESP, shiciData: defaultShici });
    }
}

export default function* shici() {
    yield takeEvery(CHANGE_SHICI, changeShici)
}
