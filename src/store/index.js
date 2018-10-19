import { createStore, applyMiddleware, combineReducers } from 'redux'
import { setStore } from 'wepy-redux'
import promiseMiddleware from 'redux-promise'
import counter from './reducers'

const rootReducer = combineReducers({
  counter
})

setStore(createStore(rootReducer, applyMiddleware(promiseMiddleware)))
