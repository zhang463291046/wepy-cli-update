//创建action
import { createAction, createActions } from 'redux-actions'

//返回值为小写字母,_代表后一个转化为大写字母,进行对象结构解析,重命名action,会触发handleActions中事件
export const { asyncIncrement: asyncInc } = createActions({
	ASYNC_INCREMENT: () => {
	  return new Promise(resolve => {
	    setTimeout(() => {
	      resolve(1)
	    }, 1000)
	  })
	} 
})