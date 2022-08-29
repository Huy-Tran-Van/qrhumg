import { takeLatest, put } from 'redux-saga/effects';

import * as types from "./type"
import * as actions from "./action"
import axios from "axios"
import { LOCALHOST_URL_API } from "../../ultis"

function* getAllSinhVienTuyenDungSaga({payload}) {

    try {
        const res = yield axios.get(`${LOCALHOST_URL_API}/sinh-vien-thuc-hien?page=${payload.nextPage ?? 1}&limit=${payload.limit ?? 7}`)
        
        if (res) {
            yield put(actions.getAllSinhVienTuyenDungSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getAllSinhVienTuyenDungFail(error))
    }
}

function* addSinhVienTuyenDungSaga({ payload }) {
    try {
        const res = yield axios.post(`${LOCALHOST_URL_API}/sinh-vien-thuc-hien`, payload)
        if (res) {
            yield put(actions.addSinhVienTuyenDungSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.addSinhVienTuyenDungFail(error))
    }
}

function* deleteSinhVienTuyenDungSaga({ payload }) {
    try {
        const res = yield axios.delete(`${LOCALHOST_URL_API}/sinh-vien-thuc-hien/${payload}`)
        if (res) {
            yield put(actions.deleteSinhVienTuyenDungSuccess(payload))
        }
    } catch (error) {
        yield put(actions.deleteSinhVienTuyenDungFail(error))
    }
}

function* updateSinhVienTuyenDungSaga({ payload }) {

    try {

        const res = yield axios.put(`${LOCALHOST_URL_API}/sinh-vien-thuc-hien/${payload.id}`, { content: payload.content })
        if (res) {
            yield put(actions.updateSinhVienTuyenDungSuccess(res.data))
        }
    } catch (error) {

        yield put(actions.updateSinhVienTuyenDungFail(error))
    }
}

function* searchSinhVienTuyenDungSaga({ payload }) {

    const url = payload !== "" ? `/content=${payload}` : "";

    try {

        const res = yield axios.get(`${LOCALHOST_URL_API}/sinh-vien-thuc-hien${url}`)
        if (res) {
            yield put(actions.searchSinhVienTuyenDungSuccess(res.data))
        }
    } catch (error) {

        yield put(actions.searchSinhVienTuyenDungFail(error))
    }
}

export function* watchingSinhVienTuyenDung() {

    yield takeLatest(types.GET_SINH_VIEN_TUYEN_DUNG, getAllSinhVienTuyenDungSaga)
    yield takeLatest(types.ADD_SINH_VIEN_TUYEN_DUNG, addSinhVienTuyenDungSaga)
    yield takeLatest(types.DELETE_SINH_VIEN_TUYEN_DUNG, deleteSinhVienTuyenDungSaga)
    yield takeLatest(types.UPDATE_SINH_VIEN_TUYEN_DUNG, updateSinhVienTuyenDungSaga)
    yield takeLatest(types.SEARCH_SINH_VIEN_TUYEN_DUNG, searchSinhVienTuyenDungSaga)


}
