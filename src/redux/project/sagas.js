import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import { firebaseOnce, getProjectList, getProjectEntry, insertProjectFirebase } from '../../services/firebase'
// import { getProjectList, getProjectEntry } from '../../services/contentful'


export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// export function* incrementAsync() {
//   yield call(delay, 1000)
//   yield put({type: 'INCREMENT_COUNTER'})
// }

function* insertProject(action) {
  const {project} = action
  yield call(insertProjectFirebase, project)
  console.log(action)
}


export function* loadProjects() {
  const data = yield call(getProjectList)
  yield put({ type: 'LOAD_PROJECTS', projects: data })
}

export default function* rootSaga() {
  // yield* takeEvery('REQUEST_PROJECTS', loadProjects)
  yield* takeEvery('INSERT_PROJECT', insertProject)
}
