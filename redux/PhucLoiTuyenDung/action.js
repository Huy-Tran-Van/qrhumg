import * as types from "./type"

// get dữ liệu
export const getAllPhucLoiTuyenDung = () => ({

    type: types.GET_PHUC_LOI_TUYEN_DUNG
})

export const getAllPhucLoiTuyenDungSuccess = (data) => ({

    type: types.GET_PHUC_LOI_TUYEN_DUNG_SUCCESS,
    payload: data
})

export const getAllPhucLoiTuyenDungFail = (data) => ({

    type: types.GET_PHUC_LOI_TUYEN_DUNG_FAIL,
    payload: data
})

// Thêm dữ liệu
export const addPhucLoiTuyenDung = (data) => ({

    type: types.ADD_PHUC_LOI_TUYEN_DUNG,
    payload: data
})

export const addPhucLoiTuyenDungSuccess = (data) => ({

    type: types.ADD_PHUC_LOI_TUYEN_DUNG_SUCCESS,
    payload: data
})

export const addPhucLoiTuyenDungFail = (data) => ({

    type: types.ADD_PHUC_LOI_TUYEN_DUNG_FAIL,
    payload: data
})

// // // Xóa dữ liệu

export const deletePhucLoiTuyenDung = (data) => ({

    type: types.DELETE_PHUC_LOI_TUYEN_DUNG,
    payload: data
})

export const deletePhucLoiTuyenDungSuccess = (data) => ({

    type: types.DELETE_PHUC_LOI_TUYEN_DUNG_SUCCESS,
    payload: data
})

export const deletePhucLoiTuyenDungFail = (data) => ({

    type: types.DELETE_PHUC_LOI_TUYEN_DUNG_FAIL,
    payload: data
})

// // Cập nhật dữ liệu

export const updatePhucLoiTuyenDung = (data) => ({

    type: types.UPDATE_PHUC_LOI_TUYEN_DUNG,
    payload: data
})

export const updatePhucLoiTuyenDungSuccess = (data) => ({

    type: types.UPDATE_PHUC_LOI_TUYEN_DUNG_SUCCESS,
    payload: data
})

export const updatePhucLoiTuyenDungFail = (data) => ({

    type: types.UPDATE_PHUC_LOI_TUYEN_DUNG_FAIL,
    payload: data
})

// // Tìm nôi dung dữ liệu

export const searchPhucLoiTuyenDung = (data) => ({

    type: types.SEARCH_PHUC_LOI_TUYEN_DUNG,
    payload: data
})

export const searchPhucLoiTuyenDungSuccess = (data) => ({

    type: types.SEARCH_PHUC_LOI_TUYEN_DUNG_SUCCESS,
    payload: data
})

export const searchPhucLoiTuyenDungFail = (data) => ({

    type: types.SEARCH_PHUC_LOI_TUYEN_DUNG_FAIL,
    payload: data
})
