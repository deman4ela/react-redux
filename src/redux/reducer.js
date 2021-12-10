import { handleActions } from "redux-actions"

const defaultState = {
    visitorName: 'Dima',
    placeholderDataSuccess: [],
    placeholderDataError: ''
}

const appReducer = handleActions(
    {
        FETCH_PLACEHOLDER_DATA_SUCCESS: (state, action) => ({
          ...state,
          placeholderDataSuccess: action.payload,
          placeholderDataError: ''
        }),
        FETCH_PLACEHOLDER_DATA_ERROR: (state, action) => ({
          ...state,
          placeholderDataError: action.payload
      })},
        defaultState
  )

export default appReducer
