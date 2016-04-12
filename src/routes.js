import React, { Component } from 'react'
import { Route } from 'react-router'

import ProjectsList from './redux/project/containerList'
import ProjectSingle from './redux/project/containerSingle'

import Counter from './redux/counter/container'

export default () => (
    <Route>
  		<Route path="/" component={Counter} />
  		<Route path="/projects" component={ProjectsList}/>
			<Route path="/projects/:projectId" component={ProjectSingle}/>
  	</Route>
)
