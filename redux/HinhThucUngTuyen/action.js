import * as types from "./type"

// get dữ liệu
export const getAllHinhThucUngTuyen = () => (
    {

        type: types.GET_HINH_THUC_UNG_TUYEN
    })

export const getAllHinhThucUngTuyenSuccess = (data) => ({

    type: types.GET_HINH_THUC_UNG_TUYEN_SUCCESS,
    payload: data
})

export const getAllHinhThucUngTuyenFail = (data) => ({

    type: types.GET_HINH_THUC_UNG_TUYEN_FAIL,
    payload: data
})

// Thêm dữ liệu
export const addHinhThucUngTuyen = (data) => ({

    type: types.ADD_HINH_THUC_UNG_TUYEN,
    payload: data
})

export const addHinhThucUngTuyenSuccess = (data) => ({

    type: types.ADD_HINH_THUC_UNG_TUYEN_SUCCESS,
    payload: data
})

export const addHinhThucUngTuyenFail = (data) => ({

    type: types.ADD_HINH_THUC_UNG_TUYEN_FAIL,
    payload: data
})

// // Xóa dữ liệu

export const deleteHinhThucUngTuyen = (data) => ({

    type: types.DELETE_HINH_THUC_UNG_TUYEN,
    payload: data
})

export const deleteHinhThucUngTuyenSuccess = (data) => ({

    type: types.DELETE_HINH_THUC_UNG_TUYEN_SUCCESS,
    payload: data
})

export const deleteHinhThucUngTuyenFail = (data) => ({

    type: types.DELETE_HINH_THUC_UNG_TUYEN_FAIL,
    payload: data
})

// // Cập nhật dữ liệu

export const updateHinhThucUngTuyen = (data) => ({

    type: types.UPDATE_HINH_THUC_UNG_TUYEN,
    payload: data
})

export const updateHinhThucUngTuyenSuccess = (data) => ({

    type: types.UPDATE_HINH_THUC_UNG_TUYEN_SUCCESS,
    payload: data
})

export const updateHinhThucUngTuyenFail = (data) => ({

    type: types.UPDATE_HINH_THUC_UNG_TUYEN_FAIL,
    payload: data
})

// // Tìm nôi dung dữ liệu

export const searchHinhThucUngTuyen = (data) => ({

    type: types.SEARCH_HINH_THUC_UNG_TUYEN,
    payload: data
})

export const searchHinhThucUngTuyenSuccess = (data) => ({

    type: types.SEARCH_HINH_THUC_UNG_TUYEN_SUCCESS,
    payload: data
})

export const searchHinhThucUngTuyenFail = (data) => ({

    type: types.SEARCH_HINH_THUC_UNG_TUYEN_FAIL,
    payload: data
})
