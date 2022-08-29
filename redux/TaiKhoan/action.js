import * as types from "./type"

export const getTaiKhoan = (data) => ({

    type: types.GET_TAI_KHOAN,
    payload: data
})

export const getTaiKhoanSuccess = (data) => ({

    type: types.GET_TAI_KHOAN_SUCCESS,
    payload: data
})

export const getTaiKhoanFail = (data) => ({

    type: types.GET_TAI_KHOAN_FAIL,
    payload: data
})

export const updateTaiKhoan = (data) => ({

    type: types.UPDATE_TAI_KHOAN,
    payload: data
})

export const updateTaiKhoanSuccess = (data) => ({

    type: types.UPDATE_TAI_KHOAN_SUCCESS,
    payload: data
})

export const updateTaiKhoanFail = (data) => ({

    type: types.UPDATE_TAI_KHOAN_FAIL,
    payload: data
})