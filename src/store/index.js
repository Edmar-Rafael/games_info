import { compose, createStore } from 'redux'
import middlewares from './middlewares'
import appreducer from './ducks'

const rootReducer = (type, action) => {
  return appreducer(type, action)
}

const store = createStore(rootReducer, compose(...middlewares))

export default store