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

export function onSubmit(projectFormValues) {
  const project = {
    [projectFormValues.slug]: projectFormValues
  }
  return {
    type: 'INSERT_PROJECT',
    project
  }
}
