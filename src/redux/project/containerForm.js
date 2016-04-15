import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProjectActions from './actions'

import _ from 'lodash'

import { Link } from 'react-router'
import { reduxForm } from 'redux-form'

class ProjectForm extends Component {
  render() {
    const { insertProject } = this.props
    let project = {
      mama: {
        name: 'Mama',
        slug: 'mama',
      }
    }

    const {fields: {name, slug, description}, zandleSubmit} = this.props;

    return (
      <form>
      <div>
      <Link to={`/projects`}>Project List</Link>
      <br />
        Insert Project
        <div>

        </div>
        <button onClick={() => insertProject(project)}>Save</button>
      </div>
      <input type="text" placeholder="Name" {...name}/>
      <input type="text" placeholder="Slug" {...slug}/>
      <input type="text" placeholder="Description" {...description}/>
      <button onClick={() => zandleSubmit()}>Save Form</button>
      </form>
    )
  }
}

ProjectForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'project',                           // a unique name for this form
  fields: ['name','slug','description'] // all the fields in your form
})(ProjectForm)

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProjectActions, dispatch)
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
