import React, { Component } from 'react'
import Slug from 'slug'

import NavBar from '../nav/NavBar'
import UnicornEditor from '../util/UnicornEditor'
import RichEditorExample from '../util/RichEditorExample'
import PlainEditor from '../util/PlainEditor'

class ProjectForm extends Component {
  render() {
    const {fields: {name, slug, description}, handleSubmit, onSubmit} = this.props;
    const emptyProject = {
      project: {
        name: null,
        slug: null,
        description: null
      }
    }
    const { project } = this.props.project ? this.props : emptyProject

    return (
      <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Add New Project</h1>

          <div>
            <label>Project Name</label>
            <div>
              <input type="text" placeholder="Project Name" {...name} value={project.name} />

            </div>
          </div>

          <div>
            <label>Slug</label>
            <div>
              <input type="text" placeholder="Slug" {...slug} value={project.slug} disabled={false} />
            </div>
          </div>

          <div>
            <label>Description</label>
            <PlainEditor {...description} value={project.description} />
          </div>

          <div>
            <button type="submit">Add Project</button>
          </div>
        </div>
      </form>
      </div>
    )
  }
}

export default ProjectForm
