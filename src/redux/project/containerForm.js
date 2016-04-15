import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProjectActions from './actions'

import _ from 'lodash'

import { Link } from 'react-router'

class ProjectForm extends Component {
  render() {
    const { insertProject } = this.props
    let project = {
      mama: {
        name: 'Mama',
        slug: 'mama',
      }
    }

    return (
      <div>
      <Link to={`/projects`}>Project List</Link>
      <br />
        Insert Project
        <button onClick={() => insertProject(project)}>Save</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
