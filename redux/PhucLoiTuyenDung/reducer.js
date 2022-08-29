import * as types from "./type";
const INITSTATE = {
    dataPhucLoiTuyenDung: [],
    loading: false,
};

export const phucLoiTuyenDungReducer = (state = INITSTATE, action) => {

    switch (action.type) {

        case types.GET_PHUC_LOI_TUYEN_DUNG:
            return { ...state };

        case types.GET_PHUC_LOI_TUYEN_DUNG_SUCCESS:
            return {
                ...state,
                ...{ dataPhucLoiTuyenDung: action.payload.data },
            };

        case types.GET_PHUC_LOI_TUYEN_DUNG_FAIL:
            return {
                ...state,
                dataPhucLoiTuyenDung: [],
            };

        case types.ADD_PHUC_LOI_TUYEN_DUNG:
            return { ...state, loading: true };

        case types.ADD_PHUC_LOI_TUYEN_DUNG_SUCCESS:
            return {
                ...state,
                dataPhucLoiTuyenDung: [...state.dataPhucLoiTuyenDung, action.payload.data],
            };

        case types.ADD_PHUC_LOI_TUYEN_DUNG_FAIL:
            return {
                ...state,
                dataPhucLoiTuyenDung: [],
            };

        case types.DELETE_PHUC_LOI_TUYEN_DUNG:
            return { ...state, loading: true };

        case types.DELETE_PHUC_LOI_TUYEN_DUNG_SUCCESS:
            return {
                ...state,
                dataPhucLoiTuyenDung: state.dataPhucLoiTuyenDung.filter((item) => item.Id !== action.payload),
            };

        case types.DELETE_PHUC_LOI_TUYEN_DUNG_FAIL:
            return {
                ...state,
                dataPhucLoiTuyenDung: [],
                loading: false,
            };

        case types.UPDATE_PHUC_LOI_TUYEN_DUNG:
            return { ...state, loading: true };

        case types.UPDATE_PHUC_LOI_TUYEN_DUNG_SUCCESS:
            return {
                ...state,
                ...{ loading: false },

            };

        case types.UPDATE_PHUC_LOI_TUYEN_DUNG:
            return {
                ...state,
                dataPhucLoiTuyenDung: [],
                loading: false,
            };

        case types.SEARCH_PHUC_LOI_TUYEN_DUNG:
            return { ...state, loading: true };

        case types.SEARCH_PHUC_LOI_TUYEN_DUNG_SUCCESS:
            return {
                ...state,
                ...{ dataPhucLoiTuyenDung: action.payload.data },
            };

        case types.SEARCH_PHUC_LOI_TUYEN_DUNG_FAIL:
            return {
                ...state,
                dataPhucLoiTuyenDung: [],
            };

        default:
            return state;
    }
};
