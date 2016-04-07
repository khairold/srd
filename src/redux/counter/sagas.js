import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

import { firebaseOnce } from '../../services/firebase'

export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// export function* incrementAsync() {
//   yield call(delay, 1000)
//   yield put({type: 'INCREMENT_COUNTER'})
// }

import contentful from 'contentful'
import util from 'util'

function lala() {
	const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  	space: 'hgl24qudwjuc',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  	accessToken: 'a95afef0df966e658a31c0060c421ca5fde4b0df6e3fff0468713d3529041d20'
	})

	client.getEntry('53IdFu8WCkuuGiEkkK0cO2')
	.then(function (entry) {
	  console.log(util.inspect(entry, {depth: null}))
	})

}

export function* incrementAsync() {
	lala()
  const data = yield call(firebaseOnce)
  console.log(data)
  yield put({type: 'INCREMENT_COUNTER'})
}

export default function* rootSaga() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync) 
}

