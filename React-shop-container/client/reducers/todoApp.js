import { combineReducers } from 'redux'
import listItems from './listItems'

const todoApp = combineReducers({
  listItems,
  // delItems
})


export default todoApp