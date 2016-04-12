import 'babel-polyfill'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

//Store
import { configureStore } from './redux/store'
import DevTools from './redux/DevTools'
const store = configureStore()

//Init
import { requestProjects } from './redux/project/actions'
store.dispatch(requestProjects())

//React Redux Router
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import ProjectsList from './redux/project/containerList'
import ProjectSingle from './redux/project/containerSingle'
import Counter from './redux/counter/container'

const history = syncHistoryWithStore(browserHistory, store)

const Root = () => (
  <div>
    <Provider store={store} >
      <Router history={history}>
        <Route path="/" component={Counter} />
        <Route path="/projects" component={ProjectsList}/>
        <Route path="/projects/:projectSlug" component={ProjectSingle}/>
      </Router>
    </Provider>
    <DevTools store={store} />
  </div>
)

render(<Root />, document.getElementById('root'))
