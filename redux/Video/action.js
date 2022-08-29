import * as types from "./type"

// get du lieu
export const getAllVideo = (data) => ({

    type: types.GET_ALL_VIDEO,
    payload: data
})

export const getAllVideoSuccess = (data) => ({

    type: types.GET_ALL_VIDEO_SUCCESS,
    payload: data
})

export const getAllVideoFail = (data) => ({

    type: types.GET_ALL_VIDEO_FAIL,
    payload: data
})

// them du lieu
export const postVideo = (data) => ({

    type: types.POST_VIDEO,
    payload: data
})

export const postVideoSuccess = (data) => ({

    type: types.POST_VIDEO_SUCCESS,
    payload: data
})

export const postVideoFail = (data) => ({

    type: types.POST_VIDEO_FAIL,
    payload: data
})

// Xoa du lieu
export const deleteVideo = (data) => ({

    type: types.DELETE_VIDEO,
    payload: data
})

export const deleteVideoSuccess = (data) => ({

    type: types.DELETE_VIDEO_SUCCESS,
    payload: data
})

export const deleteVideoFail = (data) => ({

    type: types.DELETE_VIDEO_FAIL,
    payload: data
})