import * as types from "./type"

export const getAllChiTietTuyenDung = () => ({

    type: types.GET_CHI_TIET_TUYEN_DUNG
})

export const getAllChiTietTuyenDungSuccess = (data) => ({

    type: types.GET_CHI_TIET_TUYEN_DUNG_SUCCESS,
    payload: data
})

export const getAllChiTietTuyenDungFail = (data) => ({

    type: types.GET_CHI_TIET_TUYEN_DUNG_FAIL,
    payload: data
})