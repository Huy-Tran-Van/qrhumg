import { takeLatest, put } from 'redux-saga/effects';

import * as types from "./type"
import * as actions from "./action"
import axios from "axios"
import { LOCALHOST_URL_API } from "../../ultis"

function* getAllPhucLoiTuyenDungSaga() {

    try {
        const res = yield axios.get(`${LOCALHOST_URL_API}/phuc-loi`)

        if (res) {
            yield put(actions.getAllPhucLoiTuyenDungSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getAllPhucLoiTuyenDungFail(error))
    }
}

function* addPhucLoiTuyenDungSaga({ payload }) {
    try {
        const res = yield axios.post(`${LOCALHOST_URL_API}/phuc-loi`, payload)
        if (res) {
            yield put(actions.addPhucLoiTuyenDungSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.addPhucLoiTuyenDungFail(error))
    }
}

function* deletePhucLoiTuyenDungSaga({ payload }) {
    try {
        const res = yield axios.delete(`${LOCALHOST_URL_API}/phuc-loi/${payload}`)
        if (res) {
            yield put(actions.deletePhucLoiTuyenDungSuccess(payload))
        }
    } catch (error) {
        yield put(actions.deletePhucLoiTuyenDungFail(error))
    }
}

function* updatePhucLoiTuyenDungSaga({ payload }) {

    try {

        const res = yield axios.put(`${LOCALHOST_URL_API}/phuc-loi/${payload.id}`, { content: payload.content })
        if (res) {
            yield put(actions.updatePhucLoiTuyenDungSuccess(res.data))
        }
    } catch (error) {

        yield put(actions.updatePhucLoiTuyenDungFail(error))
    }
}

function* searchPhucLoiTuyenDungSaga({ payload }) {
    
    const url = payload !== "" ? `/content=${payload}` : "";
    try {

        const res = yield axios.get(`${LOCALHOST_URL_API}/phuc-loi${url}`)
        if (res) {
            yield put(actions.searchPhucLoiTuyenDungSuccess(res.data))
        }
    } catch (error) {

        yield put(actions.searchPhucLoiTuyenDungSuccess(error))
    }
}

export function* watchingPhucLoiTuyenDung() {

    yield takeLatest(types.GET_PHUC_LOI_TUYEN_DUNG, getAllPhucLoiTuyenDungSaga)
    yield takeLatest(types.ADD_PHUC_LOI_TUYEN_DUNG, addPhucLoiTuyenDungSaga)
    yield takeLatest(types.DELETE_PHUC_LOI_TUYEN_DUNG, deletePhucLoiTuyenDungSaga)
    yield takeLatest(types.UPDATE_PHUC_LOI_TUYEN_DUNG, updatePhucLoiTuyenDungSaga)
    yield takeLatest(types.SEARCH_PHUC_LOI_TUYEN_DUNG, searchPhucLoiTuyenDungSaga)


}
