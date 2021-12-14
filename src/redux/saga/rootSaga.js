import { all } from 'redux-saga/effects'
import placeholderDataSagaWatcher from './placeholderDataSaga'
import postSagaWatcher from './postSaga'

export default function* rootSaga() {
    yield all([
      placeholderDataSagaWatcher(),
      postSagaWatcher()
    ]);
  }