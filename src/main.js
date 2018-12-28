import '@babel/polyfill'

import * as React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Shici from './components/Shici'
import Header from './components/Header'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({ type })

function render() {
  ReactDOM.render(
    <div>
      <Header />
      <Shici
        shici={store.getState().shici}
        changeShici={() => action('CHANGE_SHICI')}
      />
    </div>,
    document.getElementById('root'),
  )
}

render()
store.subscribe(render)
