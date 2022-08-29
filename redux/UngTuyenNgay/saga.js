import { takeLatest, put } from 'redux-saga/effects';

import * as types from "./type"
import * as actions from "./action"
import axios from "axios"
import { LOCALHOST_URL_API } from "../../ultis"

function* getAllUngTuyenNgaySaga() {

    try {
        const res = yield axios.get(`${LOCALHOST_URL_API}/ung-tuyen-ngay`)

        if (res) {
            yield put(actions.getAllUngTuyenNgaySuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getAllUngTuyenNgayFail(error))
    }
}

function* addUngTuyenNgaySaga({ payload }) {
    try {
        const res = yield axios.post(`${LOCALHOST_URL_API}/ung-tuyen-ngay`, payload)
        if (res) {
            yield put(actions.addUngTuyenNgaySuccess(res.data))
        }
    } catch (error) {
        yield put(actions.addUngTuyenNgayFail(error))
    }
}

function* deleteUngTuyenNgaySaga({ payload }) {
    try {
        const res = yield axios.delete(`${LOCALHOST_URL_API}/ung-tuyen-ngay/${payload}`)
        if (res) {
            yield put(actions.deleteUngTuyenNgaySuccess(payload))
        }
    } catch (error) {
        yield put(actions.deleteUngTuyenNgayFail(error))
    }
}

// function* updateUngTuyenNgaySaga({ payload }) {

//     try {

//         const res = yield axios.put(`${LOCALHOST_URL_API}/ung-tuyen-ngay/${payload.id}`, { content: payload.content })
//         if (res) {
//             yield put(actions.updateUngTuyenNgaySuccess(res.data))
//         }
//     } catch (error) {

//         yield put(actions.updateUngTuyenNgayFail(error))
//     }
// }

function* searchUngTuyenNgaySaga({ payload }) {

    const hoVaTen = payload.hoVaTen !== "" ? payload.hoVaTen : null;
    const email = payload.email !== "" ? payload.email : null;
    const viTriUngTuyen = payload.viTriUngTuyen !== "" ? payload.viTriUngTuyen : null;
    const khoa = payload.khoa !== "" ? payload.khoa : null;
    const hinhThucTuyenSinh = payload.hinhThucTuyenSinh !== "" ? payload.hinhThucTuyenSinh : null;

    const url = hoVaTen !== null || email !== null || viTriUngTuyen !== null || khoa !== null || hinhThucTuyenSinh !== null ? `/hoVaTen=${hoVaTen}&email=${email}&viTriUngTuyen=${viTriUngTuyen}&khoa=${khoa}&hinhThucTuyenSinh=${hinhThucTuyenSinh}` : hoVaTen === null && email === null && viTriUngTuyen === null && khoa === null && hinhThucTuyenSinh === null ? "" : "";

    try {

        const res = yield axios.get(`${LOCALHOST_URL_API}/ung-tuyen-ngay${url}`)
        
        if (res) {

            
            yield put(actions.searchUngTuyenNgaySuccess(res.data))
        }
    } catch (error) {

        yield put(actions.searchUngTuyenNgayFail(error))
    }
}

export function* watchingUngTuyenNgay() {

    yield takeLatest(types.GET_UNG_TUYEN_NGAY, getAllUngTuyenNgaySaga)
    yield takeLatest(types.ADD_UNG_TUYEN_NGAY, addUngTuyenNgaySaga)
    yield takeLatest(types.DELETE_UNG_TUYEN_NGAY, deleteUngTuyenNgaySaga)
    // yield takeLatest(types.UPDATE_UNG_TUYEN_NGAY, updateUngTuyenNgaySaga)
    yield takeLatest(types.SEARCH_UNG_TUYEN_NGAY, searchUngTuyenNgaySaga)


}
