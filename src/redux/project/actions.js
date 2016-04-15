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

export function zandleSubmit() {
  const { project } = store.getState().form
  return {
    type: 'INSERT_PROJECT',
    project
  }
}
