import { FETCH_PLACEHOLDER_DATA } from "../types";
import { fetchPlaceholderDataSuccess, fetchPlaceholderDataError } from "../actions";
import { getPlaceholderData } from "../../api/api";
import { takeEvery, put, call } from 'redux-saga/effects';

export default function* rootSagaWatcher() {
    yield takeEvery(FETCH_PLACEHOLDER_DATA, rootSagaWorker);
  }
  
  function* rootSagaWorker(action) {
    try {
      const payload = yield call(getPlaceholderData);
      yield put(fetchPlaceholderDataSuccess(payload));
    } catch (error) {
      yield put(fetchPlaceholderDataError(error.message));
    }
  }