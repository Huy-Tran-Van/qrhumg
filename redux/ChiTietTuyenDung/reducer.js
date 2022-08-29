import * as types from "./type";
const INITSTATE = {
    dataChiTietTuyenDung: [],
    loading: false,
};

export const chiTietTuyenDungReducer = (state = INITSTATE, action) => {

    switch (action.type) {
        case types.GET_CHI_TIET_TUYEN_DUNG:
            return { ...state, loading: true };
        case types.GET_CHI_TIET_TUYEN_DUNG_SUCCESS:
            return {
                ...state,
                ...{ dataChiTietTuyenDung: action.payload.data, loading: true },
            };
        case types.GET_CHI_TIET_TUYEN_DUNG_FAIL:
            return {
                ...state,
                dataChiTietTuyenDung: [],
                loading: false,
            };
        default:
            return state;
    }
};
