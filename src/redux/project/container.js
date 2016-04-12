import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProjectActions from './actions'

import _ from 'lodash'

class Projects extends Component {
  render() {
    const { projects, requestProjects } = this.props
    let gg = []
    _.forEach(projects, (value, key) => {
      const ff = () => <div>ja</div>
      gg = <ff />
    })
    const pp = JSON.stringify(projects)
    return (
      <div>
        Projects baby {gg}
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
