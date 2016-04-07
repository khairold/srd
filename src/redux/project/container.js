import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Projects extends Component {
  render() {
    const { projects } = this.props
    const pp = JSON.stringify(projects)
    return (
      <div>
        Projects baby {pp}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Projects)
