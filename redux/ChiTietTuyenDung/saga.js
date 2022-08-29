import { takeLatest, put } from 'redux-saga/effects';

import * as types from "./type"
import * as actions from "./action"
import axios from "axios"
import { LOCALHOST_URL_API } from "../../ultis"

function* getAllChiTietTuyenDungSaga() {

    try {
        const res = yield axios.get(`${LOCALHOST_URL_API}/chi-tiet-tuyen-dung`)
        if (res) {
            yield put(actions.getAllChiTietTuyenDungSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getAllChiTietTuyenDungFail(error))
    }
}

export function* watchingChiTietTuyenDung() {

    yield takeLatest(types.GET_CHI_TIET_TUYEN_DUNG, getAllChiTietTuyenDungSaga)
}
