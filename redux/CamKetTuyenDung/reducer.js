import * as types from "./type";
const INITSTATE = {
    dataCamKetTuyenDung: [],
    loading: false,
    maxPage: 0,
    countData: 0,
};

export const camKetTuyenDungReducer = (state = INITSTATE, action) => {

    switch (action.type) {

        case types.GET_CAM_KET_TUYEN_DUNG:

            return { ...state };

        case types.GET_CAM_KET_TUYEN_DUNG_SUCCESS:

            return {
                ...state,
                ...{ dataCamKetTuyenDung: action.payload.data },
                maxPage: action.payload.page.maxPage,
                countData: action.payload.page.countData,
            };

        case types.GET_CAM_KET_TUYEN_DUNG_FAIL:
            
            return {
                ...state,
                dataCamKetTuyenDung: [],
            };

        case types.ADD_CAM_KET_TUYEN_DUNG:
            return { ...state, loading: true };

        case types.ADD_CAM_KET_TUYEN_DUNG_SUCCESS:
            return {
                ...state,
                dataCamKetTuyenDung: [...state.dataCamKetTuyenDung, action.payload.data],
            };

        case types.ADD_CAM_KET_TUYEN_DUNG_FAIL:
            return {
                ...state,
                dataCamKetTuyenDung: [],
            };

        case types.DELETE_CAM_KET_TUYEN_DUNG:
            return { ...state, loading: true };

        case types.DELETE_CAM_KET_TUYEN_DUNG_SUCCESS:
            return {
                ...state,
                dataCamKetTuyenDung: state.dataCamKetTuyenDung.filter((item) => item.Id !== action.payload),
            };

        case types.DELETE_CAM_KET_TUYEN_DUNG_FAIL:
            return {
                ...state,
                dataCamKetTuyenDung: [],
                loading: false,
            };

        case types.UPDATE_CAM_KET_TUYEN_DUNG:
            return { ...state, loading: true };

        case types.UPDATE_CAM_KET_TUYEN_DUNG_SUCCESS:
            return {
                ...state,
                ...{ loading: false },

            };

        case types.UPDATE_CAM_KET_TUYEN_DUNG_FAIL:
            return {
                ...state,
                dataCamKetTuyenDung: [],
                loading: false,
            };

        case types.SEARCH_CAM_KET_TUYEN_DUNG:
            return { ...state, loading: true };

        case types.SEARCH_CAM_KET_TUYEN_DUNG_SUCCESS:
            return {
                ...state,
                ...{ dataCamKetTuyenDung: action.payload.data },
            };

        case types.SEARCH_CAM_KET_TUYEN_DUNG_FAIL:
            return {
                ...state,
                dataCamKetTuyenDung: [],
            };

        default:
            return state;
    }
};
