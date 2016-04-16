import React, { Component } from 'react'
import Slug from 'slug'

import NavBar from '../nav/NavBar'

class ProjectForm extends Component {
  render() {
    const {fields: {name, slug, description}, handleSubmit, onSubmit} = this.props;

    return (
      <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Add New Project</h1>

          <div>
            <label>Project Name</label>
            <div>
              <input type="text" placeholder="Name" {...name}/>
            </div>
          </div>

          <div>
            <label>Slug</label>
            <div>
              <input type="text" placeholder="Slug" {...slug}/>
            </div>
          </div>

          <div>
            <label>Description</label>
            <div>
              <textarea {...description} value={description.value || ''} />
            </div>
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
