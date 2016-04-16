import React, { Component } from 'react'
import NavBar from '../nav/NavBar'
import { Link } from 'react-router'

import _ from 'lodash'

class ProjectsList extends Component {
  render() {
    const { projects, requestProjects } = this.props
    const projectsArr = _.values(projects)
    const projectsNodes = projectsArr.map(project => {
      return <div key={project.slug}><Link to={`/projects/${project.slug}`}>{project.name}</Link></div>
    })
    return (
      <div>
        <NavBar />
        <h1>Projects List</h1>
        {projectsNodes}
        <div>
          <button onClick={() => requestProjects()}>Request Projects</button>
        </div>
      </div>
    )
  }
}

export default ProjectsList
