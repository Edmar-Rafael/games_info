import { getPlatforms } from "../../services/platforms"
import { ActionProps, DispatchProps, ResponseProps } from "../../@Types/types"

const Types = {
  REQUEST: 'plaforms/REQUEST',
  REQUEST_SUCCESS: 'plaforms/REQUEST_SUCCESS',
  REQUEST_FAILURE: 'plaforms/REQUEST_FAILURE'
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

export function requestPlatforms() {
  return async (dispatch: DispatchProps) => {
    dispatch(Creators.request())
    try {
      const response = await getPlatforms()
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

export default function platformsState(state = initialState, action: ActionProps) {
  const {type, data} = action
  
  switch(type) {
    case Types.REQUEST:
    case Types.REQUEST_SUCCESS:
    case Types.REQUEST_FAILURE: {
      return {...state, ...data}
    }

    default: {
      return state
    }
  }
}