import { FETCH_POST } from "../types"
import { fetchPostSuccess, fetchPostError } from "../actions"
import { getPlaceholderDataDetails } from "../../api/api"
import { takeEvery, put, call } from 'redux-saga/effects'
import 'regenerator-runtime/runtime'

export default function* postSagaWatcher() {
    yield takeEvery(FETCH_POST, postSagaWorker)
  }
  
  function* postSagaWorker(action) {
    try {
      const payload = yield call(getPlaceholderDataDetails, action.payload)
      yield put(fetchPostSuccess(payload))
    } catch (error) {
      yield put(fetchPostError(error.message))
    }
  }