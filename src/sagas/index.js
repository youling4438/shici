/* eslint-disable no-constant-condition */

import { put, takeEvery, delay, call } from 'redux-saga/effects'
import api from '../services/shici'

function getShici() {
  return api.change().then((resp) => {
    return resp;
  })
}

export function* changeShici() {
  const defaultShici = '纵使晴明无雨色，入云深处亦沾衣'
  try {
    const data = yield call(getShici);
    const { content: shici } = JSON.parse(data);
    console.log('shici :', shici);
    yield put({ type: 'CHANGE_SHICI_RESP', shici });
  } catch (error) {
    yield put({ type: 'CHANGE_SHICI_RESP', defaultShici });
  }
}

export default function* rootSaga() {
  yield takeEvery('CHANGE_SHICI', changeShici)
}
