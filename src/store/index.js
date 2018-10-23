import { createStore, applyMiddleware, combineReducers } from 'redux'
import { setStore } from 'wepy-redux'
// redux-promise让action支持异步
import promiseMiddleware from 'redux-promise'
import counter from './reducers'
// 合并多个reducers
const rootReducer = combineReducers({
  counter
})
// 创建store
const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))
// wepy-redux设置store
setStore(store)
