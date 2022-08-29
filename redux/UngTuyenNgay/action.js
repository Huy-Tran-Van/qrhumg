import * as types from "./type"

// get dữ liệu
export const getAllUngTuyenNgay = () => (
    
    {

        type: types.GET_UNG_TUYEN_NGAY
    })

export const getAllUngTuyenNgaySuccess = (data) => ({

    type: types.GET_UNG_TUYEN_NGAY_SUCCESS,
    payload: data
})

export const getAllUngTuyenNgayFail = (data) => ({

    type: types.GET_UNG_TUYEN_NGAY_FAIL,
    payload: data
})

// Thêm dữ liệu
export const addUngTuyenNgay = (data) => ({

    type: types.ADD_UNG_TUYEN_NGAY,
    payload: data
})

export const addUngTuyenNgaySuccess = (data) => ({

    type: types.ADD_UNG_TUYEN_NGAY_SUCCESS,
    payload: data
})

export const addUngTuyenNgayFail = (data) => ({

    type: types.ADD_UNG_TUYEN_NGAY_FAIL,
    payload: data
})

// // Xóa dữ liệu

export const deleteUngTuyenNgay = (data) => ({

    type: types.DELETE_UNG_TUYEN_NGAY,
    payload: data
})

export const deleteUngTuyenNgaySuccess = (data) => ({

    type: types.DELETE_UNG_TUYEN_NGAY_SUCCESS,
    payload: data
})

export const deleteUngTuyenNgayFail = (data) => ({

    type: types.DELETE_UNG_TUYEN_NGAY_FAIL,
    payload: data
})

// // Cập nhật dữ liệu

// export const updateUngTuyenNgay = (data) => ({

//     type: types.UPDATE_UNG_TUYEN_NGAY,
//     payload: data
// })

// export const updateUngTuyenNgaySuccess = (data) => ({

//     type: types.UPDATE_UNG_TUYEN_NGAY_SUCCESS,
//     payload: data
// })

// export const updateUngTuyenNgayFail = (data) => ({

//     type: types.UPDATE_UNG_TUYEN_NGAY_FAIL,
//     payload: data
// })

// // Tìm nội dung dữ liệu

export const searchUngTuyenNgay = (data) => ({

    type: types.SEARCH_UNG_TUYEN_NGAY,
    payload: data
})

export const searchUngTuyenNgaySuccess = (data) => ({

    type: types.SEARCH_UNG_TUYEN_NGAY_SUCCESS,
    payload: data
})

export const searchUngTuyenNgayFail = (data) => ({

    type: types.SEARCH_UNG_TUYEN_NGAY_FAIL,
    payload: data
})
