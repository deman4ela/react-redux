import { createSelector } from 'reselect'


  const getNameFromStore = state => state.visitorName;

  const mySelector = createSelector(
    [getNameFromStore],
    visitorName => visitorName
)

export default mySelector;