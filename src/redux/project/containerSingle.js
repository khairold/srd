import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import _ from 'lodash'


import { Link } from 'react-router'

class ProjectSingle extends Component {
  render() {
    const { project } = this.props
    const projectName = project && project.name ? <h1>{project.name}</h1> : null
    return (
      <div>
        <div>
          <Link to={`/projects`}>Project List</Link>
        </div>
        {projectName}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const { projectSlug } = ownProps.params
  return {
    project: state.projects[projectSlug]
  }
}

export default connect(mapStateToProps)(ProjectSingle)
