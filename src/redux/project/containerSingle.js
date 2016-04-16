import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ProjectSingleComponent from '../../components/project/ProjectSingle'

class ProjectSingle extends Component {
  render() {
    return (
      <ProjectSingleComponent {...this.props} />
    )
  }
}

function makeMapStateToProps(initialState, initialOwnProps) {
  const { projectSlug } = initialOwnProps.params
  return function mapStateToProps(state) {
    return {
      project: state.projects[projectSlug]
    }
  }
}

// function mapStateToProps(state, ownProps) {
//   const { projectSlug } = ownProps.params
//   return {
//     project: state.projects[projectSlug]
//   }
// }

export default connect(makeMapStateToProps)(ProjectSingle)
