import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProjectActions from './actions'

import ProjectsListComponent from '../../components/project/ProjectsList'

class ProjectsList extends Component {
  render() {
    return (
      <ProjectsListComponent {...this.props} />
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
