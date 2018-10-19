
import { createAction } from 'redux-actions'

export const asyncInc = createAction('ASYNC_INCREMENT', () => {
	console.log(1)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
})