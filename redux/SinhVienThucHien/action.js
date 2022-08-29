import * as types from "./type"

// get dữ liệu
export const getAllSinhVienTuyenDung = (data) => (
    
    {

        type: types.GET_SINH_VIEN_TUYEN_DUNG,
        payload: data
    })

export const getAllSinhVienTuyenDungSuccess = (data) => ({

    type: types.GET_SINH_VIEN_TUYEN_DUNG_SUCCESS,
    payload: data
})

export const getAllSinhVienTuyenDungFail = (data) => ({

    type: types.GET_SINH_VIEN_TUYEN_DUNG_FAIL,
    payload: data
})

// Thêm dữ liệu
export const addSinhVienTuyenDung = (data) => ({

    type: types.ADD_SINH_VIEN_TUYEN_DUNG,
    payload: data
})

export const addSinhVienTuyenDungSuccess = (data) => ({

    type: types.ADD_SINH_VIEN_TUYEN_DUNG_SUCCESS,
    payload: data
})

export const addSinhVienTuyenDungFail = (data) => ({

    type: types.ADD_SINH_VIEN_TUYEN_DUNG_FAIL,
    payload: data
})

// // Xóa dữ liệu

export const deleteSinhVienTuyenDung = (data) => ({

    type: types.DELETE_SINH_VIEN_TUYEN_DUNG,
    payload: data
})

export const deleteSinhVienTuyenDungSuccess = (data) => ({

    type: types.DELETE_SINH_VIEN_TUYEN_DUNG_SUCCESS,
    payload: data
})

export const deleteSinhVienTuyenDungFail = (data) => ({

    type: types.DELETE_SINH_VIEN_TUYEN_DUNG_FAIL,
    payload: data
})

// // Cập nhật dữ liệu

export const updateSinhVienTuyenDung = (data) => ({

    type: types.UPDATE_SINH_VIEN_TUYEN_DUNG,
    payload: data
})

export const updateSinhVienTuyenDungSuccess = (data) => ({

    type: types.UPDATE_SINH_VIEN_TUYEN_DUNG_SUCCESS,
    payload: data
})

export const updateSinhVienTuyenDungFail = (data) => ({

    type: types.UPDATE_SINH_VIEN_TUYEN_DUNG_FAIL,
    payload: data
})

// // Tìm nôi dung dữ liệu

export const searchSinhVienTuyenDung = (data) => ({

    type: types.SEARCH_SINH_VIEN_TUYEN_DUNG,
    payload: data
})

export const searchSinhVienTuyenDungSuccess = (data) => ({

    type: types.SEARCH_SINH_VIEN_TUYEN_DUNG_SUCCESS,
    payload: data
})

export const searchSinhVienTuyenDungFail = (data) => ({

    type: types.SEARCH_SINH_VIEN_TUYEN_DUNG_FAIL,
    payload: data
})
