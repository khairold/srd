import React, { Component } from 'react'
import { render } from 'react-dom'



//Reducer
import { combineReducers } from 'redux'

const counter = function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state + 1
    case 'DECREMENT_COUNTER':
      return state - 1
    default:
      return state
  }
}

const initialProjects = {
  ipsec: {
    name: 'ipsec',
    owner: 'iffah'
  }
}

const projects = function projects(state = initialProjects, action) {
  return state
}

const reducer = combineReducers({
  counter, projects
})

//DevTools

import DevTools from './dev/DevTools'



//Store
import { createStore, applyMiddleware, compose } from 'redux'

const initialState = null

const createStoreWithMiddleware = compose(
  DevTools.instrument()
)(createStore)

const store = createStoreWithMiddleware(reducer)


//React Redux
import { Provider } from 'react-redux'


const Root = () => (
  <div>
  <Provider store={store} >
    <div>lla</div>
  </Provider>
  <DevTools store={store} />
  </div>
)

render(<Root />, document.getElementById('root'))
