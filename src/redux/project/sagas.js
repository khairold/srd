import { takeEvery } from 'redux-saga'
import { put, call, fork, take } from 'redux-saga/effects'

import { firebaseOnce, getProjectList, getProjectEntry, insertProjectFirebase } from '../../services/firebase'
// import { getProjectList, getProjectEntry } from '../../services/contentful'


export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function* insertProject() {
  while(true) {
    const { project } = yield take('INSERT_PROJECT')
    yield call(insertProjectFirebase, project)
  }
}

function* loadProjects() {
  while(true) {
    const action = yield take('REQUEST_PROJECTS')
    const data = yield call(getProjectList)
    yield put({ type: 'LOAD_PROJECTS', projects: data })
  }
}

export default function* rootSaga() {
  yield fork(loadProjects)
  yield fork(insertProject)
}
