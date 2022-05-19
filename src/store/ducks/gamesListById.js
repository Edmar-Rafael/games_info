import { getGameById } from "../../services/games"

const Types = {
  REQUEST: 'gamesListById/REQUEST',
  REQUEST_SUCCESS: 'gamesListById/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'gamesListById/REQUEST_FAILURE'
}

const Creators = {
  request: () => ({
    type: Types.REQUEST,
    data: {
      loading: true,
      error: false
    }
  }),

  requestSuccess: (response) => ({
    type: Types.REQUEST_SUCCESS,
    data: {
      loading: false,
      data: response
    }
  }),

  requestFailure: () => ({
    type: Types.REQUEST_FAILURE,
    data: {
      loading: false,
      error: true
    }
  })
}

export function requestGamesListById(id) {
  return async(dispatch) => {
    dispatch(Creators.request())
    try {
      const response = await getGameById(id)
      dispatch(Creators.requestSuccess(response.data))
    } catch(error) {
      dispatch(Creators.requestFailure())
    }
  }
}

const initialState = {
  loading: true,
  error: false,
  data: {}
}

export default function gamesListByIdState(state = initialState, action) {
  const {type, data} = action

  switch(type) {
    case Types.REQUEST: {
      return {...state, ...data}
    }
    case Types.REQUEST_SUCCESS: {
      return {...state, ...data}
    }
    case Types.REQUEST_FAILURE: {
      return {...state, ...data}
    }

    default: {
      return state
    }
  }
}