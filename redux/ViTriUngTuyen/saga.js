import { takeLatest, put } from 'redux-saga/effects';

import * as types from "./type"
import * as actions from "./action"
import axios from "axios"
import { LOCALHOST_URL_API } from "../../ultis"

function* getAllViTriUngTuyenSaga() {

    try {
        const res = yield axios.get(`${LOCALHOST_URL_API}/vi-tri-ung-tuyen`)
        if (res) {
            yield put(actions.getAllViTriUngTuyenSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getAllViTriUngTuyenFail(error))
    }
}

function* addViTriUngTuyenSaga({ payload }) {
    try {
        const res = yield axios.post(`${LOCALHOST_URL_API}/vi-tri-ung-tuyen`, payload)
        if (res) {
            yield put(actions.addViTriUngTuyenSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.addViTriUngTuyenFail(error))
    }
}

function* deleteViTriUngTuyenSaga({ payload }) {
    try {
        const res = yield axios.delete(`${LOCALHOST_URL_API}/vi-tri-ung-tuyen/${payload}`)
        if (res) {
            yield put(actions.deleteViTriUngTuyenSuccess(payload))
        }
    } catch (error) {
        yield put(actions.deleteViTriUngTuyenFail(error))
    }
}

function* updateViTriUngTuyenSaga({ payload }) {

    try {

        const res = yield axios.put(`${LOCALHOST_URL_API}/vi-tri-ung-tuyen/${payload.id}`, { tenViTri: payload.content })
        if (res) {
            yield put(actions.updateViTriUngTuyenSuccess(res.data))
        }
    } catch (error) {

        yield put(actions.updateViTriUngTuyenFail(error))
    }
}

function* searchViTriUngTuyenSaga({ payload }) {

    const url =   payload !== "" ? `/content=${payload}` : ""

    try {

        const res = yield axios.get(`${LOCALHOST_URL_API}/vi-tri-ung-tuyen${url}`)
        if (res) {
            yield put(actions.searchViTriUngTuyenSuccess(res.data))
        }
    } catch (error) {
        console.log("err", err);
        yield put(actions.searchViTriUngTuyenFail(error))
    }
}

export function* watchingViTriUngTuyen() {

    yield takeLatest(types.GET_VI_TRI_UNG_TUYEN, getAllViTriUngTuyenSaga)
    yield takeLatest(types.ADD_VI_TRI_UNG_TUYEN, addViTriUngTuyenSaga)
    yield takeLatest(types.DELETE_VI_TRI_UNG_TUYEN, deleteViTriUngTuyenSaga)
    yield takeLatest(types.UPDATE_VI_TRI_UNG_TUYEN, updateViTriUngTuyenSaga)
    yield takeLatest(types.SEARCH_VI_TRI_UNG_TUYEN, searchViTriUngTuyenSaga)


}
