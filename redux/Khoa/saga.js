import { takeLatest, put } from 'redux-saga/effects';

import * as types from "./type"
import * as actions from "./action"
import axios from "axios"
import { LOCALHOST_URL_API } from "../../ultis"
import { toast } from 'react-toastify';

function* getAllKhoaSaga({ payload }) {

    const url = payload !== undefined ? `?page=${payload.nextPage ?? 1}&limit=${payload.limit ?? 7}` : "";

    try {
        const res = yield axios.get(`${LOCALHOST_URL_API}/khoa${url}`)

        if (res) {

            yield put(actions.getAllKhoaSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getAllKhoaFail(error))
    }
}

function* addKhoaSaga({ payload }) {

    try {

        const res = yield axios.post(`${LOCALHOST_URL_API}/khoa`, payload)

        if (res) {

            yield put(actions.addKhoaSuccess(res.data))
        }
    } catch (error) {

        yield put(actions.addKhoaFail(error))
    }
}

function* deleteKhoaSaga({ payload }) {

    try {

        const res = yield axios.delete(`${LOCALHOST_URL_API}/khoa/${payload}`)

        if (res) {
            yield put(actions.deleteKhoaSuccess(payload))
        }

    } catch (error) {

        yield put(actions.deleteKhoaFail(error))
    }
}

// function* updateKhoaSaga({ payload }) {

//     try {

//         const res = yield axios.put(`${LOCALHOST_URL_API}/khoa/${payload.id}`, { content: payload.content })
//         if (res) {
//             yield put(actions.updateKhoaSuccess(res.data))
//         }
//     } catch (error) {

//         yield put(actions.updateKhoaFail(error))
//     }
// }

function* searchKhoaSaga({ payload }) {

    const hoVaTen = payload.hoVaTen !== "" ? payload.hoVaTen : null;
    const email = payload.email !== "" ? payload.email : null;
    const viTriUngTuyen = payload.viTriUngTuyen !== "" ? payload.viTriUngTuyen : null;
    const khoa = payload.khoa !== "" ? payload.khoa : null;
    const hinhThucTuyenSinh = payload.hinhThucTuyenSinh !== "" ? payload.hinhThucTuyenSinh : null;

    const url = hoVaTen !== null || email !== null || viTriUngTuyen !== null || khoa !== null || hinhThucTuyenSinh !== null ? `/hoVaTen=${hoVaTen}&email=${email}&viTriUngTuyen=${viTriUngTuyen}&khoa=${khoa}&hinhThucTuyenSinh=${hinhThucTuyenSinh}` : hoVaTen === null && email === null && viTriUngTuyen === null && khoa === null && hinhThucTuyenSinh === null ? "" : "";

    try {

        const res = yield axios.get(`${LOCALHOST_URL_API}/khoa${url}`)

        if (res) {

            yield put(actions.searchKhoaSuccess(res.data))
        }

    } catch (error) {

        yield put(actions.searchKhoaFail(error))
    }
}

function* getKhoaFilterSaga({ payload }) {


    try {
        const res = yield axios.get(`${LOCALHOST_URL_API}/filter-khoa/${payload}`)

        if (res) {

            yield put(actions.getKhoaFilterSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getKhoaFilterFail(error))
    }
}

function* getAllKhoaFilterSaga() {

    console.log("vào đây");
    try {
        const res = yield axios.get(`${LOCALHOST_URL_API}/filter-khoa`)
        console.log("res", res);
        if (res) {

            yield put(actions.getAllKhoaFilterSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getAllKhoaFilterFail(error))
        console.log("errr", err);
    }
}

function* postKhoaFilterSaga({payload}) {

    console.log("vào đây");
    try {
        const res = yield axios.post(`${LOCALHOST_URL_API}/filter-khoa`, payload)
        if (res) {

            yield put(actions.postKhoaFilterSuccess(res.data))
            toast.success("Thêm thành công...!");
        }else{
            toast.error("Đã tồn tại...!");

        }
    } catch (error) {
        yield put(actions.postKhoaFilterFail(error))
        toast.error("Đã tồn tại...!");

    }
}

export function* watchingKhoa() {

    yield takeLatest(types.GET_KHOA, getAllKhoaSaga)
    yield takeLatest(types.ADD_KHOA, addKhoaSaga)
    yield takeLatest(types.DELETE_KHOA, deleteKhoaSaga)
    // yield takeLatest(types.UPDATE_KHOA, updateKhoaSaga)
    yield takeLatest(types.SEARCH_KHOA, searchKhoaSaga)
    yield takeLatest(types.GET_KHOA_FILTER, getKhoaFilterSaga)
    yield takeLatest(types.GET_ALL_KHOA_FILTER, getAllKhoaFilterSaga)
    yield takeLatest(types.POST_KHOA_FILTER, postKhoaFilterSaga)

}
