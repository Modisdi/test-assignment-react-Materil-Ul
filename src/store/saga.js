import { fork } from 'redux-saga/effects'
// modules
import { academiesSaga } from './modules/academies/academiesSaga'


export default function* rootSaga() {
  yield fork(academiesSaga)
}
