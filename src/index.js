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

import Container from './components/util/Container'
import ProjectsList from './redux/project/containerList'
import ProjectSingle from './redux/project/containerSingle'
import ProjectForm from './redux/project/containerForm'
import Counter from './redux/counter/container'

const history = syncHistoryWithStore(browserHistory, store)

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const Root = () => (
  <div>
    <Provider store={store} >
      <Router history={history}>
        <Route path="/" component={Container} >
          <Route path="/projects" component={ProjectsList}/>
          <Route path="/projects/new" component={ProjectForm}/>
          <Route path="/projects/:projectSlug" component={ProjectSingle}/>
        </Route>
      </Router>
    </Provider>
    <DevTools store={store} />
  </div>
)

render(<Root />, document.getElementById('root'))
