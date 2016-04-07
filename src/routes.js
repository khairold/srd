import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Projects from './redux/project/container'
import Counter from './redux/counter/container'

export default () => (
	<Router history={browserHistory}>
    <Route>
  		<Route path="/" component={Counter} />
  		<Route path="/projects" component={Projects}/>
  	</Route>
	</Router>
)
