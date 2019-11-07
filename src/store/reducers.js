import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import academiesReducer from './modules/academies'


export default history => combineReducers({
  router: connectRouter(history),
  academiesReducer,
})
