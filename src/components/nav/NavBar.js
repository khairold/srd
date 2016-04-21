import React, { Component } from 'react'
import { Link } from 'react-router'

const NavBar = (props) => (
  <div>
    <ul>
      <li><Link to={`/projects`}>Project List</Link></li>
      <li><Link to={`/projects/fiber-inventory/edit`}>Edit Project</Link></li>
      <li><Link to={`/projects/new`}>Add New Project</Link></li>
    </ul>
  </div>
)

export default NavBar
