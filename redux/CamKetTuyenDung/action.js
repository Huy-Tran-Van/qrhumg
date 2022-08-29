import * as types from "./type"

// get dữ liệu
export const getAllCamKetTuyenDung = (data) => ({

    type: types.GET_CAM_KET_TUYEN_DUNG,
    payload: data
})

export const getAllCamKetTuyenDungSuccess = (data) => ({

    type: types.GET_CAM_KET_TUYEN_DUNG_SUCCESS,
    payload: data
})

export const getAllCamKetTuyenDungFail = (data) => ({

    type: types.GET_CAM_KET_TUYEN_DUNG_FAIL,
    payload: data
})

// Thêm dữ liệu
export const addCamKetTuyenDung = (data) => ({

    type: types.ADD_CAM_KET_TUYEN_DUNG,
    payload: data
})

export const addCamKetTuyenDungSuccess = (data) => ({

    type: types.ADD_CAM_KET_TUYEN_DUNG_SUCCESS,
    payload: data
})

export const addCamKetTuyenDungFail = (data) => ({

    type: types.ADD_CAM_KET_TUYEN_DUNG_FAIL,
    payload: data
})

// Xóa dữ liệu

export const deleteCamKetTuyenDung = (data) => ({

    type: types.DELETE_CAM_KET_TUYEN_DUNG,
    payload: data
})

export const deleteCamKetTuyenDungSuccess = (data) => ({

    type: types.DELETE_CAM_KET_TUYEN_DUNG_SUCCESS,
    payload: data
})

export const deleteCamKetTuyenDungFail = (data) => ({

    type: types.DELETE_CAM_KET_TUYEN_DUNG_FAIL,
    payload: data
})

// Cập nhật dữ liệu

export const updateCamKetTuyenDung = (data) => ({

    type: types.UPDATE_CAM_KET_TUYEN_DUNG,
    payload: data
})

export const updateCamKetTuyenDungSuccess = (data) => ({

    type: types.UPDATE_CAM_KET_TUYEN_DUNG_SUCCESS,
    payload: data
})

export const updateCamKetTuyenDungFail = (data) => ({

    type: types.UPDATE_CAM_KET_TUYEN_DUNG_FAIL,
    payload: data
})

// Tìm nôi dung dữ liệu

export const searchCamKetTuyenDung = (data) => ({

    type: types.SEARCH_CAM_KET_TUYEN_DUNG,
    payload: data
})

export const searchCamKetTuyenDungSuccess = (data) => ({

    type: types.SEARCH_CAM_KET_TUYEN_DUNG_SUCCESS,
    payload: data
})

export const searchCamKetTuyenDungFail = (data) => ({

    type: types.SEARCH_CAM_KET_TUYEN_DUNG_FAIL,
    payload: data
})
