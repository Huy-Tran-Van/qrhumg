import * as types from "./type"

// get dữ liệu
export const getAllViTriUngTuyen = () => ({

    type: types.GET_VI_TRI_UNG_TUYEN
})

export const getAllViTriUngTuyenSuccess = (data) => ({

    type: types.GET_VI_TRI_UNG_TUYEN_SUCCESS,
    payload: data
})

export const getAllViTriUngTuyenFail = (data) => ({

    type: types.GET_VI_TRI_UNG_TUYEN_FAIL,
    payload: data
})

// Thêm dữ liệu
export const addViTriUngTuyen = (data) => ({

    type: types.ADD_VI_TRI_UNG_TUYEN,
    payload: data
})

export const addViTriUngTuyenSuccess = (data) => ({

    type: types.ADD_VI_TRI_UNG_TUYEN_SUCCESS,
    payload: data
})

export const addViTriUngTuyenFail = (data) => ({

    type: types.ADD_VI_TRI_UNG_TUYEN_FAIL,
    payload: data
})

// // Xóa dữ liệu

export const deleteViTriUngTuyen = (data) => ({

    type: types.DELETE_VI_TRI_UNG_TUYEN,
    payload: data
})

export const deleteViTriUngTuyenSuccess = (data) => ({

    type: types.DELETE_VI_TRI_UNG_TUYEN_SUCCESS,
    payload: data
})

export const deleteViTriUngTuyenFail = (data) => ({

    type: types.DELETE_VI_TRI_UNG_TUYEN_FAIL,
    payload: data
})

// // Cập nhật dữ liệu

export const updateViTriUngTuyen = (data) => ({

    type: types.UPDATE_VI_TRI_UNG_TUYEN,
    payload: data
})

export const updateViTriUngTuyenSuccess = (data) => ({

    type: types.UPDATE_VI_TRI_UNG_TUYEN_SUCCESS,
    payload: data
})

export const updateViTriUngTuyenFail = (data) => ({

    type: types.UPDATE_VI_TRI_UNG_TUYEN_FAIL,
    payload: data
})

// // Tìm nội dung dữ liệu

export const searchViTriUngTuyen = (data) => ({

    type: types.SEARCH_VI_TRI_UNG_TUYEN,
    payload: data
})

export const searchViTriUngTuyenSuccess = (data) => ({

    type: types.SEARCH_VI_TRI_UNG_TUYEN_SUCCESS,
    payload: data
})

export const searchViTriUngTuyenFail = (data) => ({

    type: types.SEARCH_VI_TRI_UNG_TUYEN_FAIL,
    payload: data
})
