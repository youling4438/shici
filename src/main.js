import '@babel/polyfill'

import * as React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import Shici from './components/Shici'
import Header from './components/Header'
import reducer from './reducers'
import Routes from './routes'
import rootSaga from './sagas'
import { Globalstyle } from './styles/global-styles'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

// const action = type => store.dispatch({ type })

function render() {
  ReactDOM.render(
    // <div>
    //   <Header />
    //   <Shici
    //     shiciData={store.getState().shiciData}
    //     changeShici={() => action('CHANGE_SHICI')}
    //   />
    // </div>,
    <div>
      <Globalstyle />
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>,
    document.getElementById('root'),
  )
}

render()
store.subscribe(render)
