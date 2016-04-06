import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import Firebase from 'firebase'
const ref = new Firebase('https://srd.firebaseio.com/')



function callfb() {
	return ref.child('projects').once('value').then(function(snapshot) {
  // renderBlog(snapshot.val())
	  // console.log(snapshot.val())
	  return snapshot.val()
	}, function(error) {
	  console.error(error)
	})
}

export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// export function* incrementAsync() {
//   yield call(delay, 1000)
//   yield put({type: 'INCREMENT_COUNTER'})
// }

export function* incrementAsync() {
  const data = yield call(callfb)
  console.log(data)
  yield put({type: 'INCREMENT_COUNTER'})
}

export default function* rootSaga() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}
