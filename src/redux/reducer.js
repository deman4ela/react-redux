import { bindActionCreators } from 'redux'

const changeVisitorName = 'CHANGE_VISITOR_NAME'

export const changeVisitorNameAction = (visitorName) => ({
  type: changeVisitorName,
  payload: visitorName,
})

const defaultState = {
  visitorName: 'Dima',
  age: 25,
}

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case changeVisitorName:
      return { visitorName: action.payload }

    default:
      return state
  }
}

export default appReducer
