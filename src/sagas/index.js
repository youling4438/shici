/* eslint-disable no-constant-condition */

import { put, takeEvery, delay, call } from 'redux-saga/effects'
import api from '../services/shici'

export function* incrementAsync() {
  yield delay(1000)

  yield put({ type: 'INCREMENT' })
}

export function* changeShici() {
  const shici = '纵使晴明无雨色，入云深处亦沾衣'
  try {
    const data = yield call(api.change);
    console.log('data :', data);
    yield put({ type: 'CHANGE_SHICI_RESP', data });
  } catch (error) {
    yield put({ type: 'CHANGE_SHICI_RESP', shici });
  }
}

export default function* rootSaga() {
  yield takeEvery('CHANGE_SHICI', changeShici)
}
