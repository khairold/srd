import 'babel-polyfill'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

/* Start Store */
import reducers from './reducers'
import DevTools from './DevTools'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './counter/sagas'

// const createStoreWithMiddleware = compose(
//   DevTools.instrument()
// )(createStore)
//
// const store = createStoreWithMiddleware(reducers)


const store = createStore(
  reducers,
  applyMiddleware(
    createSagaMiddleware(rootSaga)
  )
)

  // <DevTools store={store} />
/* End Store */

//React Redux
import Projects from './project/container'
import Counter from './counter/container'

const Root = () => (
  <div>
  <Provider store={store} >
    <div>
      <Counter />
    </div>
  </Provider>

  </div>
)

render(<Root />, document.getElementById('root'))
