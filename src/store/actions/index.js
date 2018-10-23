//创建action
import { createAction, createActions } from 'redux-actions'

//返回值为小写字母,_代表后一个转化为大写字母,会触发handleActions中事件,进行对象结构解析重命名action
export const { asyncIncrement: asyncInc, asyncDecrement: asyncDec } = createActions({
	ASYNC_INCREMENT() {
	  return new Promise(resolve => {
	    setTimeout(() => {
	      resolve(1)
	    }, 1000)
	  })
	},
	ASYNC_DECREMENT() {
	  return new Promise(resolve => {
	    setTimeout(() => {
	      resolve(1)
	    }, 1000)
	  })
	} 
})