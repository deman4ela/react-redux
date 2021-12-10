import { createAction } from 'redux-actions';



export const fetchPlaceholderData = createAction('FETCH_PLACEHOLDER_DATA')
export const fetchPlaceholderDataSuccess = createAction('FETCH_PLACEHOLDER_DATA_SUCCESS')
export const fetchPlaceholderDataError = createAction('FETCH_PLACEHOLDER_DATA_ERROR')
