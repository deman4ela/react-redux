import { handleActions } from "redux-actions"

const defaultState = {
    visitorName: 'Dima',
    placeholderDataSuccess: [],
    placeholderDataError: '',

    postSuccess: [],
    postError: ''
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
        }),
        FETCH_POST_SUCCESS: (state, action) => ({
          ...state,
          postSuccess: action.payload,
          postError: ''
        }),
        FETCH_POST_ERROR: (state, action) => ({
          ...state,
          postError: action.payload
        })
    },
        defaultState
  )

export default appReducer
