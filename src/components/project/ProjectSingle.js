import React, { Component } from 'react'
import NavBar from '../nav/NavBar'

import marked from 'marked'

const Marked = ({ markedText }) => <div dangerouslySetInnerHTML={{ __html: marked(markedText, { sanitize: true }) }} />

class ProjectSingle extends Component {
  render() {
    const { project } = this.props

    const ProjectName = project && project.name ? <h1 contentEditable="true">{project.name}</h1> : null
    const Description = project && project.description ? <Marked markedText={project.description} /> : null
    const Updates = project && project.updates ? <Marked markedText={project.updates} /> : null

    return (
      <div>
        <NavBar />
        {ProjectName}
        <div>
        <p contentEditable="true">This is an editable paragraph.</p>
          {Description}
          {Updates}
        </div>
      </div>
    )
  }
}

export default ProjectSingle
