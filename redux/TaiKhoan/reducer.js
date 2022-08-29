import * as types from "./type";

const INITSTATE = {
    dataTaiKhoan: [],
    loading: false
}

export const taiKhoanReducer = (state = INITSTATE, action) => {

    switch (action.type) {

        case types.GET_TAI_KHOAN:
            return {
                ...state
            }
        case types.GET_TAI_KHOAN_SUCCESS:
            console.log("action.payload.data", action.payload.data[0]);
            return {
                ...state,
                ...{ dataTaiKhoan: action.payload.data[0] }
            }

        case types.GET_TAI_KHOAN_FAIL:
            return {
                ...state,
                dataTaiKhoan: []
            }

        default:
            return state;
    }
}