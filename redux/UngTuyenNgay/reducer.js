import * as types from "./type";
const INITSTATE = {
    dataUngTuyenNgay: [],
    loading: false,
};

export const ungTuyenNgayReducer = (state = INITSTATE, action) => {

    switch (action.type) {

        case types.GET_UNG_TUYEN_NGAY:
            return { ...state };

        case types.GET_UNG_TUYEN_NGAY_SUCCESS:
            return {
                ...state,
                ...{ dataUngTuyenNgay: action.payload.data },
            };

        case types.GET_UNG_TUYEN_NGAY_FAIL:
            return {
                ...state,
                dataUngTuyenNgay: [],
            };

        case types.ADD_UNG_TUYEN_NGAY:
            return { ...state, loading: true };

        case types.ADD_UNG_TUYEN_NGAY_SUCCESS:
            return {
                ...state,
                dataUngTuyenNgay: [...state.dataUngTuyenNgay, action.payload.data],
            };

        case types.ADD_UNG_TUYEN_NGAY_FAIL:
            return {
                ...state,
                dataUngTuyenNgay: [],
            };

        case types.DELETE_UNG_TUYEN_NGAY:
            return { ...state, loading: true };

        case types.DELETE_UNG_TUYEN_NGAY_SUCCESS:
            return {
                ...state,
                dataUngTuyenNgay: state.dataUngTuyenNgay.filter((item) => item.Id !== action.payload),
            };

        case types.DELETE_UNG_TUYEN_NGAY_FAIL:
            return {
                ...state,
                dataUngTuyenNgay: [],
                loading: false,
            };

        // case types.UPDATE_UNG_TUYEN_NGAY:
        //     return { ...state, loading: true };

        // case types.UPDATE_UNG_TUYEN_NGAY_SUCCESS:
        //     return {
        //         ...state,
        //         ...{ loading: false },

        //     };

        // case types.UPDATE_UNG_TUYEN_NGAY_FAIL:
        //     return {
        //         ...state,
        //         dataUngTuyenNgay: [],
        //         loading: false,
        //     };

        case types.SEARCH_UNG_TUYEN_NGAY:
            return { ...state, loading: true };

        case types.SEARCH_UNG_TUYEN_NGAY_SUCCESS:
            return {
                ...state,
                ...{ dataUngTuyenNgay: action.payload.data },
            };

        case types.SEARCH_UNG_TUYEN_NGAY_FAIL:
            return {
                ...state,
                dataUngTuyenNgay: [],
            };

        default:
            return state;
    }
};
