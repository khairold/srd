import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProjectActions from './actions'

class Projects extends Component {
  render() {
    const { projects, requestProjects } = this.props
    const pp = JSON.stringify(projects)
    return (
      <div>
        Projects baby {pp}
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

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
