import * as types from "./type"

// get dữ liệu
export const getAllKhoa = (data) => ({

    type: types.GET_KHOA,
    payload: data
})

export const getAllKhoaSuccess = (data) => ({

    type: types.GET_KHOA_SUCCESS,
    payload: data
})

export const getAllKhoaFail = (data) => ({

    type: types.GET_KHOA_FAIL,
    payload: data
})

// Thêm dữ liệu
export const addKhoa = (data) => ({

    type: types.ADD_KHOA,
    payload: data
})

export const addKhoaSuccess = (data) => ({

    type: types.ADD_KHOA_SUCCESS,
    payload: data
})

export const addKhoaFail = (data) => ({

    type: types.ADD_KHOA_FAIL,
    payload: data
})

// // Xóa dữ liệu

export const deleteKhoa = (data) => ({

    type: types.DELETE_KHOA,
    payload: data
})

export const deleteKhoaSuccess = (data) => ({

    type: types.DELETE_KHOA_SUCCESS,
    payload: data
})

export const deleteKhoaFail = (data) => ({

    type: types.DELETE_KHOA_FAIL,
    payload: data
})

// // Cập nhật dữ liệu

export const updateKhoa = (data) => ({

    type: types.UPDATE_KHOA,
    payload: data
})

export const updateKhoaSuccess = (data) => ({

    type: types.UPDATE,
    payload: data
})

export const updateKhoaFail = (data) => ({

    type: types.UPDATE_KHOA_FAIL,
    payload: data
})

// // Tìm nội dung dữ liệu

export const searchKhoa = (data) => ({

    type: types.SEARCH_KHOA,
    payload: data
})

export const searchKhoaSuccess = (data) => ({

    type: types.SEARCH_KHOA_SUCCESS,
    payload: data
})

export const searchKhoaFail = (data) => ({

    type: types.SEARCH_KHOA_FAIL,
    payload: data
})

// Filter khoa
export const getKhoaFilter = (data) => ({

    type: types.GET_KHOA_FILTER,
    payload: data
})

export const getKhoaFilterSuccess = (data) => ({

    type: types.GET_KHOA_FILTER_SUCCESS,
    payload: data
})

export const getKhoaFilterFail = (data) => ({

    type: types.GET_KHOA_FILTER_FAIL,
    payload: data
})

// lấy tất cả dữ liệu fillter khoa

export const getAllKhoaFilter = () => ({

    type: types.GET_ALL_KHOA_FILTER,
})

export const getAllKhoaFilterSuccess = (data) => ({

    type: types.GET_ALL_KHOA_FILTER_SUCCESS,
    payload: data
})

export const getAllKhoaFilterFail = (data) => ({

    type: types.GET_ALL_KHOA_FILTER_FAIL,
    payload: data

})

// Thêm filter khoa

export const postKhoaFilter = (data) => ({

    type: types.POST_KHOA_FILTER,
    payload: data
})

export const postKhoaFilterSuccess = (data) => ({

    type: types.POST_KHOA_FILTER_SUCCESS,
    payload: data
})

export const postKhoaFilterFail = (data) => ({

    type: types.POST_KHOA_FILTER_FAIL,
    payload: data
})


