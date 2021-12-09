import { createAction } from 'redux-actions';



export const fetchPlaceholderData = createAction('FETCH_PLACEHOLDER_DATA')
export const fetchPlaceholderDataSuccess = createAction('FETCH_PLACEHOLDER_DATA_SUCCESS')
export const fetchPlaceholderDataError = createAction('FETCH_PLACEHOLDER_DATA_ERROR')



// export const fetchPlaceholderData = () => ({
//     type: FETCH_PLACEHOLDER_DATA,
//   });
  
//   export const fetchPlaceholderDataSuccess = (data) => ({
//     type: FETCH_PLACEHOLDER_DATA_SUCCESS,
//     payload: data,
//   });
  
//   export const fetchPlaceholderDataError = (err) => ({
//     type: FETCH_PLACEHOLDER_DATA_ERROR,
//     payload: err,
//   });