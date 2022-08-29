import {takeLatest,put} from 'redux-saga/effects';
import * as types from "./type";
import * as actions from "./action";
import axios from "axios";
import { URL_API } from "../../ultis";

function* getDataMenuSaga() {
  try {
    const res = yield axios.get(`${URL_API}menus`);
    
    if (res) {
      yield put(actions.getDataMenuSuccess(res.data));
    }
  } catch (error) {
    yield put(actions.getDataMenuFail(error));
  }
}

export function* watchingGetDataMenu() {
  yield takeLatest(types.GET_MENU, getDataMenuSaga);
}
