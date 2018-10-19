//触发action事件
import { handleAction, handleActions } from 'redux-actions'

//设置默认值
const defaultState = {
  num: 0,
  asyncNum: 0
}

export default handleActions(
	{
	  INCREMENT: (state, action) => ({
	  	...state,
	    num: state.num + 1
	  }),
	  DECREMENT(state, action) {
	    return {
	      ...state,
	      num: state.num - 1
	    }
	  },
	  ASYNC_INCREMENT(state, action) {
	  	console.log(state, action)
	    return {
	      ...state,
	      asyncNum: state.asyncNum + action.payload
	    }
	  }
	}, 
	defaultState
)