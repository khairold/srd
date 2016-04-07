import 'babel-polyfill'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

//Store
import { configureStore } from './redux/store'
import DevTools from './redux/DevTools'
const store = configureStore()

//React Redux
import Routes from './routes'

const Root = () => (
  <div>
    <Provider store={store} >
      <Routes />
    </Provider>
    <DevTools store={store} />
  </div>
)

render(<Root />, document.getElementById('root'))
