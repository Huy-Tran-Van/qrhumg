import { takeLatest, put } from 'redux-saga/effects';
import * as types from "./type"
import * as actions from "./action"
import axios from "axios"
import { LOCALHOST_URL_API } from "../../ultis"
import { toast } from "react-toastify"

function* getTaiKhoanByIdSaga({ payload }) {

    try {
        const res = yield axios.get(`${LOCALHOST_URL_API}/tai-khoan/${payload}`)

        if (res) {
            yield put(actions.getTaiKhoanSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getTaiKhoanFail(error))
    }
}

function* updateTaiKhoanByIdSaga({ payload }) {

    try {
        const res = yield axios.put(`${LOCALHOST_URL_API}/tai-khoan/${payload.id}`, payload.data)
        toast.success("Cập nhật tài khoản thành công!!!")
        if (res) {

            yield put(actions.updateTaiKhoanSuccess(res.data))
        }
    } catch (error) {
        toast.error("Cập nhật tài khoản thất bại!!!")

        yield put(actions.updateTaiKhoanFail(error))
    }
}



export function* watchingTaiKhoan() {

    yield takeLatest(types.GET_TAI_KHOAN, getTaiKhoanByIdSaga)
    yield takeLatest(types.UPDATE_TAI_KHOAN, updateTaiKhoanByIdSaga)



}
