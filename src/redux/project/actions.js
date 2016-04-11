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
