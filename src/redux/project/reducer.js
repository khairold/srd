const initialProjects = {
  nni: {
    name: 'nni',
    owner: 'nik n'
  }
}

export default function projects(state = initialProjects, action) {
  switch (action.type) {
    case 'LOAD_PROJECTS':
      return {...state, ...action.projects }
    default:
      return state
  }
}
