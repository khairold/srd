import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProjectActions from './actions'

import { reduxForm } from 'redux-form'

import ProjectFormComponent from '../../components/project/ProjectForm'

class ProjectForm extends Component {
  render() {
    return (
      <ProjectFormComponent {...this.props} />
    )
  }
}

ProjectForm = reduxForm({
  form: 'project',
  fields: ['name','slug','description']
})(ProjectForm)

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProjectActions, dispatch)
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
