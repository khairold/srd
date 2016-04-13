import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import _ from 'lodash'


import { Link } from 'react-router'

import marked from 'marked'

const Marked = ({ markedText }) => <div dangerouslySetInnerHTML={{ __html: marked(markedText, { sanitize: true }) }} />

class ProjectSingle extends Component {
  render() {
    const { project } = this.props

    const ProjectName = project && project.name ? <h1>{project.name}</h1> : null
    const Description = project && project.description ? <Marked markedText={project.description} /> : null
    const Updates = project && project.updates ? <Marked markedText={project.updates} /> : null

    return (
      <div>
        <div>
          <Link to={`/projects`}>Project List</Link>
        </div>
        {ProjectName}
        <div>
          {Description}
          {Updates}
        </div>
      </div>
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
