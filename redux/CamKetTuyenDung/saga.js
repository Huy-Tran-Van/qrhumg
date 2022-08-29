import { takeLatest, put } from 'redux-saga/effects';

import * as types from "./type"
import * as actions from "./action"
import axios from "axios"
import { LOCALHOST_URL_API } from "../../ultis"

function* getAllCamKetTuyenDungSaga({payload}) {

    try {
        const res = yield axios.get(`${LOCALHOST_URL_API}/cam-ket-tuyen-dung?page=${payload.nextPage ?? 1}&limit=${payload.limit ?? 7}`)
        if (res) {
            yield put(actions.getAllCamKetTuyenDungSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getAllCamKetTuyenDungFail(error))
    }
}

function* addCamKetTuyenDungSaga({ payload }) {
    try {
        const res = yield axios.post(`${LOCALHOST_URL_API}/cam-ket-tuyen-dung`, payload)
        if (res) {
            yield put(actions.addCamKetTuyenDungSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.addCamKetTuyenDungFail(error))
    }
}

function* deleteCamKetTuyenDungSaga({ payload }) {
    try {
        const res = yield axios.delete(`${LOCALHOST_URL_API}/cam-ket-tuyen-dung/${payload}`)
        if (res) {
            yield put(actions.deleteCamKetTuyenDungSuccess(payload))
        }
    } catch (error) {
        yield put(actions.deleteCamKetTuyenDungFail(error))
    }
}

function* updateCamKetTuyenDungSaga({ payload }) {

    try {

        const res = yield axios.put(`${LOCALHOST_URL_API}/cam-ket-tuyen-dung/${payload.id}`, { content: payload.content })
        if (res) {
            yield put(actions.updateCamKetTuyenDungSuccess(res.data))
        }
    } catch (error) {

        yield put(actions.updateCamKetTuyenDungFail(error))
    }
}

function* searchCamKetTuyenDungSaga({ payload }) {
    const url = payload !== "" ? `/content=${payload}` : "";
    try {

        const res = yield axios.get(`${LOCALHOST_URL_API}/cam-ket-tuyen-dung${url}`)
        if (res) {
            yield put(actions.searchCamKetTuyenDungSuccess(res.data))
        }
    } catch (error) {

        yield put(actions.searchCamKetTuyenDungSuccess(error))
    }
}

export function* watchingCamKetTuyenDung() {

    yield takeLatest(types.GET_CAM_KET_TUYEN_DUNG, getAllCamKetTuyenDungSaga)
    yield takeLatest(types.ADD_CAM_KET_TUYEN_DUNG, addCamKetTuyenDungSaga)
    yield takeLatest(types.DELETE_CAM_KET_TUYEN_DUNG, deleteCamKetTuyenDungSaga)
    yield takeLatest(types.UPDATE_CAM_KET_TUYEN_DUNG, updateCamKetTuyenDungSaga)
    yield takeLatest(types.SEARCH_CAM_KET_TUYEN_DUNG, searchCamKetTuyenDungSaga)


}
