import '@babel/polyfill'

import * as React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import sagaMonitor from '../../sagaMonitor'

// import Counter from './components/Counter'
import Shici from './components/Shici'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({ type })

function render() {
  ReactDOM.render(
    <Shici
      shici={store.getState().shici}
      onIncrementAsync={() => action('CHANGE_SHICI')}
    />,
    document.getElementById('root'),
  )
}

render()
store.subscribe(render)
