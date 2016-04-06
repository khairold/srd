//Reducer
import { combineReducers } from 'redux'
import counter from './counter/reducer'
import projects from './project/reducer'

const reducers = combineReducers({
  counter, projects
})

export default reducers
