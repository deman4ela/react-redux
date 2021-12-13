import { createAction } from 'redux-actions';

export const fetchPlaceholderData = createAction('FETCH_PLACEHOLDER_DATA')
export const fetchPlaceholderDataSuccess = createAction('FETCH_PLACEHOLDER_DATA_SUCCESS')
export const fetchPlaceholderDataError = createAction('FETCH_PLACEHOLDER_DATA_ERROR')

export const fetchPost = createAction('FETCH_POST')
export const fetchPostSuccess = createAction('FETCH_POST_SUCCESS')
export const fetchPostError = createAction('FETCH_POST_ERROR')