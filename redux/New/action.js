import *  as types from "./type"

export const getNew = () => ({

    type: types.GET_NEW
})

export const getNewSuccess = (data) => ({

    type: types.GET_NEW_SUCCESS,
    payload: data
})

export const getNewFail = (data) => ({

    type: types.GET_NEW_FAIL,
    payload: data
})