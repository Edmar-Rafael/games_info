import { getGames } from "../../services/games"
import { ActionProps, DispatchProps, PlatformsProps, ResponseProps } from "../../@Types/types"

const Types = {
  REQUEST: 'gamesList/REQUEST',
  REQUEST_SUCCESS: 'gamesList/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'gamesList/REQUEST_FAILURE'
}

const Creators = {
  request: () => ({
    type: Types.REQUEST,
    data: {
      loading: true,
      error: false
    }
  }),

  requestSuccess: (response: ResponseProps) => ({
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


export function requestGamesList(page: number, search: string, platforms: PlatformsProps | undefined) {
  return async (dispatch: DispatchProps) => {
    dispatch(Creators.request())
    try {
      const response = await getGames(
        page, search, platforms ? `platforms=${platforms?.id!}` : {}
      )
      dispatch(Creators.requestSuccess(response.data))
    } catch (error) {
      dispatch(Creators.requestFailure())
    }
  }
}

const initialState = {
  loading: true,
  error: false,
  data: {}
}

export default function gamesListState(state = initialState, action: ActionProps) {
  const { type, data } = action

  switch (type) {
    case Types.REQUEST: {
      return { ...state, ...data }
    }
    case Types.REQUEST_SUCCESS: {
      return { ...state, ...data }
    }
    case Types.REQUEST_FAILURE: {
      return { ...state, ...data }
    }

    default: {
      return state
    }
  }
}