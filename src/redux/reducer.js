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

// const appReducer = (state = defaultState, action) => {
//     switch(action.type) {

//         case FETCH_PLACEHOLDER_DATA_SUCCESS:
//             return { ...state, placeholderDataSuccess: action.payload,  placeholderDataError: ''};

//         case FETCH_PLACEHOLDER_DATA_ERROR:
//             return { ...state, placeholderDataError: action.payload};

//     default:
//       return state
//   }
// }

export default appReducer
