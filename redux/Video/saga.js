import { put, takeLatest } from "@redux-saga/core/effects"
import axios from "axios"
import { LOCALHOST_URL_API } from "../../ultis"
import * as actios from "./action"
import * as types from "./type"

function* getAllVideoSaga({ payload }) {

    const paging = payload && payload.page ? `?page=${payload.page}&limit=${payload.limit}` : ''

    try {

        const res = yield axios.get(`${LOCALHOST_URL_API}/video${paging}`)

        if (res) {
            yield put(actios.getAllVideoSuccess(res.data))
        }
    } catch (error) {
        yield put(actios.getAllVideoFail(error))
        console.log({ error });
    }
}

function* postVideoSaga({ payload }) {


    try {

        const res = yield axios.post(`${LOCALHOST_URL_API}/video`, payload.data)

        if (res) {
            yield put(actios.postVideoSuccess(res.data))
        }
    } catch (error) {
        yield put(actios.postVideoFail(error))
        console.log({ error });
    }
}

function* deleteVideoSaga({ payload }) {

    try {

        const res = yield axios.delete(`${LOCALHOST_URL_API}/video/${payload.id}`)

        if (res) {
            yield put(actios.deleteVideoSuccess(payload.id))
        }
    } catch (error) {
        yield put(actios.deleteVideoFail(error))
        console.log({ error });
    }
}



export function* watchingGetAllVideo() {

    yield takeLatest(types.GET_ALL_VIDEO, getAllVideoSaga)
    yield takeLatest(types.POST_VIDEO, postVideoSaga)
    yield takeLatest(types.DELETE_VIDEO, deleteVideoSaga)


}

