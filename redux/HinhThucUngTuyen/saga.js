import { takeLatest, put } from 'redux-saga/effects';

import * as types from "./type"
import * as actions from "./action"
import axios from "axios"
import { LOCALHOST_URL_API } from "../../ultis"

function* getAllHinhThucUngTuyenSaga() {

    try {
        const res = yield axios.get(`${LOCALHOST_URL_API}/hinh-thuc-tuyen-sinh`)
        
        if (res) {
            yield put(actions.getAllHinhThucUngTuyenSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getAllHinhThucUngTuyenFail(error))
    }
}

function* addHinhThucUngTuyenSaga({ payload }) {
    try {
        const res = yield axios.post(`${LOCALHOST_URL_API}/hinh-thuc-tuyen-sinh`, payload)
        if (res) {
            yield put(actions.addHinhThucUngTuyenSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.addHinhThucUngTuyenFail(error))
    }
}

function* deleteHinhThucUngTuyenSaga({ payload }) {
    try {
        const res = yield axios.delete(`${LOCALHOST_URL_API}/hinh-thuc-tuyen-sinh/${payload}`)
        if (res) {
            yield put(actions.deleteHinhThucUngTuyenSuccess(payload))
        }
    } catch (error) {
        yield put(actions.deleteHinhThucUngTuyenFail(error))
    }
}

function* updateHinhThucUngTuyenSaga({ payload }) {

    try {

        const res = yield axios.put(`${LOCALHOST_URL_API}/hinh-thuc-tuyen-sinh/${payload.id}`, { tenHinhThuc: payload.content })
        if (res) {
            yield put(actions.updateHinhThucUngTuyenSuccess(res.data))
        }
    } catch (error) {

        yield put(actions.updateHinhThucUngTuyenFail(error))
    }
}

function* searchHinhThucUngTuyenSaga({ payload }) {

    const url = payload !== "" ? `/content=${payload}` : "";

    try {

        const res = yield axios.get(`${LOCALHOST_URL_API}/hinh-thuc-tuyen-sinh${url}`)
        if (res) {
            yield put(actions.searchHinhThucUngTuyenSuccess(res.data))
        }
    } catch (error) {

        yield put(actions.searchHinhThucUngTuyenFail(error))
    }
}

export function* watchingHinhThucUngTuyen() {

    yield takeLatest(types.GET_HINH_THUC_UNG_TUYEN, getAllHinhThucUngTuyenSaga)
    yield takeLatest(types.ADD_HINH_THUC_UNG_TUYEN, addHinhThucUngTuyenSaga)
    yield takeLatest(types.DELETE_HINH_THUC_UNG_TUYEN, deleteHinhThucUngTuyenSaga)
    yield takeLatest(types.UPDATE_HINH_THUC_UNG_TUYEN, updateHinhThucUngTuyenSaga)
    yield takeLatest(types.SEARCH_HINH_THUC_UNG_TUYEN, searchHinhThucUngTuyenSaga)


}
