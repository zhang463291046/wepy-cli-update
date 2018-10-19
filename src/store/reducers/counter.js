import { handleActions } from 'redux-actions'
const INCREMENT = 'INCREMENT'

const DECREMENT = 'DECREMENT'

const ASYNC_INCREMENT = 'ASYNC_INCREMENT'

const defaultState = {
  num: 0,
  asyncNum: 0
}

export default handleActions({
  ['INCREMENT'] (state) {
    console.log(state)
    return {
      ...state,
      num: state.num + 1
    }
  },
  [DECREMENT] (state) {
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  }
}, defaultState)