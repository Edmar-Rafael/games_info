import { combineReducers } from "redux";
import gamesListState from './gamesList'
import gamesListByIdState from './gamesListById'
import platformsState from './platformsList'

const reducers = combineReducers({
  gamesListState,
  gamesListByIdState,
  platformsState,
})

export default reducers