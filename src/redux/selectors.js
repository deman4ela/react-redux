import { createSelector } from 'reselect'


  const getNameFromStore = state => state.visitorName

 export const mySelector = createSelector(
    getNameFromStore,
    visitorName => visitorName
)


const getPostFromStore = state => state.postSuccess
export const postSelector = createSelector(
  getPostFromStore,
  postSuccess => postSuccess
)
