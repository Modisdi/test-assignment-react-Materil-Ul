import {
  put, call, all, takeLatest,
} from 'redux-saga/effects'
import { push } from 'connected-react-router'
// types
import {
  initialAcademies,

  FETCH_ACADEMIES,
  FETCH_ACADEMIES__SUCCESS,
  FETCH_ACADEMIES__FAILURE,

  CLEAR_ACADEMIES_STORE,
  CLEAR_ACADEMIES_STORE__SUCCESS,
  CLEAR_ACADEMIES_STORE__FAILURE,
} from './index'
// utils
import { fetchAcademiesAxios } from '../../../utils/fetchAcademiesAxios'
import { academiesMap } from '../../../utils/academiesMap'


// saga worker
export function* fetchAcademiesSaga() {
  try {
    const academiesData = yield call(fetchAcademiesAxios)
    const { data, hasMore } = academiesData
    if (data.length) {
      const academies = academiesMap(data)
      yield put({
        type: FETCH_ACADEMIES__SUCCESS,
        payload: {
          academies,
          hasMore,
          isInitialLoading: false,
        },
      })
    } else {
      yield put({
        type: FETCH_ACADEMIES__FAILURE,
        payload: {
          academies: [],
          hasMore: false,
          isInitialLoading: false,
        },
      })
    }
  } catch (error) {
    yield put(push('/not-found'))
    yield put({
      type: FETCH_ACADEMIES__FAILURE,
      error,
    })
  }
}


export function* clearAcademiesStoreSaga() {
  try {
    yield put({
      type: CLEAR_ACADEMIES_STORE__SUCCESS,
      payload: {
        ...initialAcademies,
      },
    })
  } catch (error) {
    yield put({
      type: CLEAR_ACADEMIES_STORE__FAILURE,
      error,
    })
  }
}

// saga listener
export function* academiesSaga() {
  yield all([
    takeLatest(FETCH_ACADEMIES, fetchAcademiesSaga),
    takeLatest(CLEAR_ACADEMIES_STORE, clearAcademiesStoreSaga),
  ])
}
