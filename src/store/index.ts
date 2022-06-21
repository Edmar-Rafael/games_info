import { compose, createStore } from 'redux'
import middlewares from './middlewares'
import appreducer from './ducks'
import { ActionProps, StateProps } from '../@Types/types'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


const rootReducer = (state: StateProps, action: ActionProps) => {
  return appreducer(state, action)
}

const store = createStore(rootReducer, compose(...middlewares))

export default store