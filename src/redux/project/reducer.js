  const initialProjects = {}

export default function projects(state = initialProjects, action) {
  switch (action.type) {
    case 'LOAD_PROJECTS':
      return {...state, ...action.projects }
      case 'INSERT_PROJECT':
        return {...state, ...action.project }
    default:
      return state
  }
}
