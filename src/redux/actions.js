import { FETCH_PLACEHOLDER_DATA, FETCH_PLACEHOLDER_DATA_SUCCESS, FETCH_PLACEHOLDER_DATA_ERROR } from "./types";


export const fetchPlaceholderData = () => ({
    type: FETCH_PLACEHOLDER_DATA,
  });
  
  export const fetchPlaceholderDataSuccess = (data) => ({
    type: FETCH_PLACEHOLDER_DATA_SUCCESS,
    payload: data,
  });
  
  export const fetchPlaceholderDataError = (err) => ({
    type: FETCH_PLACEHOLDER_DATA_ERROR,
    payload: err,
  });