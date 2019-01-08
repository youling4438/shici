import { all } from 'redux-saga/effects'
import shici from './Shici'
import Hitokoto from './Hitokoto'
import Jrsc from './Jrsc'

export default function* rootSaga() {
    yield all([
        ...shici(),
        ...Hitokoto(),
        ...Jrsc(),
    ])
}