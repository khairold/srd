import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProjectActions from './actions'

import _ from 'lodash'

import { Link } from 'react-router'

class ProjectsList extends Component {
  render() {
    const { projects, requestProjects } = this.props
    const projectsArr = _.values(projects)
    const projectsNodes = projectsArr.map(project => {
      return <div key={project.slug}><Link to={`/projects/${project.slug}`}>{project.name}</Link></div>
    })
    return (
      <div>
      <Link to={`/projects/new`}>Add New Project</Link>
      <br />
        Projects baby {projectsNodes}
        <button onClick={() => requestProjects()}>Request Projects</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProjectActions, dispatch)
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList)
