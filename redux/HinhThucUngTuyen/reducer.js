import * as types from "./type";
const INITSTATE = {
    dataHinhThucUngTuyen: [],
    loading: false,
};

export const hinhThucUngTuyenReducer = (state = INITSTATE, action) => {

    switch (action.type) {

        case types.GET_HINH_THUC_UNG_TUYEN:
            return { ...state };

        case types.GET_HINH_THUC_UNG_TUYEN_SUCCESS:
            return {
                ...state,
                ...{ dataHinhThucUngTuyen: action.payload.data },
            };

        case types.GET_HINH_THUC_UNG_TUYEN_FAIL:
            return {
                ...state,
                dataHinhThucUngTuyen: [],
            };

        case types.ADD_HINH_THUC_UNG_TUYEN:
            return { ...state, loading: true };

        case types.ADD_HINH_THUC_UNG_TUYEN_SUCCESS:
            return {
                ...state,
                dataHinhThucUngTuyen: [...state.dataHinhThucUngTuyen, action.payload.data],
            };

        case types.ADD_HINH_THUC_UNG_TUYEN_FAIL:
            return {
                ...state,
                dataHinhThucUngTuyen: [],
            };

        case types.DELETE_HINH_THUC_UNG_TUYEN:
            return { ...state, loading: true };

        case types.DELETE_HINH_THUC_UNG_TUYEN_SUCCESS:
            return {
                ...state,
                dataHinhThucUngTuyen: state.dataHinhThucUngTuyen.filter((item) => item.Id !== action.payload),
            };

        case types.DELETE_HINH_THUC_UNG_TUYEN_FAIL:
            return {
                ...state,
                dataHinhThucUngTuyen: [],
                loading: false,
            };

        case types.UPDATE_HINH_THUC_UNG_TUYEN:
            return { ...state, loading: true };

        case types.UPDATE_HINH_THUC_UNG_TUYEN_SUCCESS:
            return {
                ...state,
                ...{ loading: false },

            };

        case types.UPDATE_HINH_THUC_UNG_TUYEN_FAIL:
            return {
                ...state,
                dataHinhThucUngTuyen: [],
                loading: false,
            };

        case types.SEARCH_HINH_THUC_UNG_TUYEN:
            return { ...state, loading: true };

        case types.SEARCH_HINH_THUC_UNG_TUYEN_SUCCESS:
            return {
                ...state,
                ...{ dataHinhThucUngTuyen: action.payload.data },
            };

        case types.SEARCH_HINH_THUC_UNG_TUYEN_FAIL:
            return {
                ...state,
                dataHinhThucUngTuyen: [],
            };

        default:
            return state;
    }
};
