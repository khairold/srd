import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Projects extends Component {
  render() {
    const { projects } = this.props
    console.log(projects)
    // const lala =
    return (
      <div>
        Projects baby
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
