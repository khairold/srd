export function requestProjects() {
  return {
    type: 'REQUEST_PROJECTS'
  }
}

export function loadProjects(projects) {
  return {
    type: 'LOAD_PROJECTS',
    projects
  }
}

export function insertProject(project) {
  return {
    type: 'INSERT_PROJECT',
    project
  }
}

export function onSubmit(projectFormValues) {
  const project = {
    tata: projectFormValues
  }
  return {
    type: 'INSERT_PROJECT',
    project
  }
}
