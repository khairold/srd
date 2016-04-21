import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProjectActions from './actions'

import { reduxForm } from 'redux-form'

import ProjectFormComponent from '../../components/project/ProjectForm'

class ProjectFormEdit extends Component {
  render() {
    return (
      <ProjectFormComponent {...this.props} />
    )
  }
}

ProjectFormEdit = reduxForm({
  form: 'project',
  fields: ['name','slug','description']
})(ProjectFormEdit)

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProjectActions, dispatch)
}

function makeMapStateToProps(initialState, initialOwnProps) {
  const { projectSlug } = initialOwnProps.params
  return function mapStateToProps(state) {
    return {
      project: state.projects[projectSlug]
    }
  }
}

export default connect(makeMapStateToProps, mapDispatchToProps)(ProjectFormEdit)
