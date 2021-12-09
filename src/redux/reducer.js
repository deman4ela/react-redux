import { FETCH_PLACEHOLDER_DATA_SUCCESS, FETCH_PLACEHOLDER_DATA_ERROR } from "./types";

const defaultState = {
    visitorName: 'Dima',
    placeholderDataSuccess: [],
    placeholderDataError: ''
}

const appReducer = (state = defaultState, action) => {
    switch(action.type) {

        case FETCH_PLACEHOLDER_DATA_SUCCESS:
            return { ...state, placeholderDataSuccess: action.payload,  placeholderDataError: ''};

        case FETCH_PLACEHOLDER_DATA_ERROR:
            return { ...state, placeholderDataError: action.payload};

    default:
      return state
  }
}

export default appReducer
