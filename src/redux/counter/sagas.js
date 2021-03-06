import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import { firebaseOnce } from '../../services/firebase'
import { getProjectList, getProjectEntry } from '../../services/contentful'

export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// export function* incrementAsync() {
//   yield call(delay, 1000)
//   yield put({type: 'INCREMENT_COUNTER'})
// }

export function* incrementAsync() {
  const data = yield call(getProjectList)
  console.log(data.toPlainObject())
  yield put({type: 'INCREMENT_COUNTER'})
}

export default function* rootSaga() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}
