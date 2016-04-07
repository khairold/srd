//Reducer
import { combineReducers } from 'redux'
import counter from './counter/reducer'
import projects from './project/reducer'

const reducers = combineReducers({
  counter, projects
})

/* Start Store */
import DevTools from './DevTools'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './counter/sagas'

export function configureStore(initialState) {
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(
        createSagaMiddleware(rootSaga)
      ),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(reducers, () => {
      const nextRootReducer = reducers
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export function ConfigureDevTools(store) {
  return <DevTools store={store} />
}

/* End Store */
