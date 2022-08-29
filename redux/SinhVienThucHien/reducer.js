import * as types from "./type";
const INITSTATE = {
    dataSinhVienTuyenDung: [],
    loading: false,
    maxPage: 0,
    countData: 0,
};

export const sinhVienTuyenDungReducer = (state = INITSTATE, action) => {

    switch (action.type) {

        case types.GET_SINH_VIEN_TUYEN_DUNG:
            return { ...state };

        case types.GET_SINH_VIEN_TUYEN_DUNG_SUCCESS:
            return {
                ...state,
                ...{ dataSinhVienTuyenDung: action.payload.data },
                maxPage: action.payload.page.maxPage,
                countData: action.payload.page.countData,
            };

        case types.GET_SINH_VIEN_TUYEN_DUNG_FAIL:
            return {
                ...state,
                dataSinhVienTuyenDung: [],
            };

        case types.ADD_SINH_VIEN_TUYEN_DUNG:
            return { ...state, loading: true };

        case types.ADD_SINH_VIEN_TUYEN_DUNG_SUCCESS:
            return {
                ...state,
                dataSinhVienTuyenDung: [...state.dataSinhVienTuyenDung, action.payload.data],
            };

        case types.ADD_SINH_VIEN_TUYEN_DUNG_FAIL:
            return {
                ...state,
                dataSinhVienTuyenDung: [],
            };

        case types.DELETE_SINH_VIEN_TUYEN_DUNG:
            return { ...state, loading: true };

        case types.DELETE_SINH_VIEN_TUYEN_DUNG_SUCCESS:
            return {
                ...state,
                dataSinhVienTuyenDung: state.dataSinhVienTuyenDung.filter((item) => item.Id !== action.payload),
            };

        case types.DELETE_SINH_VIEN_TUYEN_DUNG_FAIL:
            return {
                ...state,
                dataSinhVienTuyenDung: [],
                loading: false,
            };

        case types.UPDATE_SINH_VIEN_TUYEN_DUNG:
            return { ...state, loading: true };

        case types.UPDATE_SINH_VIEN_TUYEN_DUNG_SUCCESS:
            return {
                ...state,
                ...{ loading: false },

            };

        case types.UPDATE_SINH_VIEN_TUYEN_DUNG_FAIL:
            return {
                ...state,
                dataSinhVienTuyenDung: [],
                loading: false,
            };

        case types.SEARCH_SINH_VIEN_TUYEN_DUNG:
            return { ...state, loading: true };

        case types.SEARCH_SINH_VIEN_TUYEN_DUNG_SUCCESS:
            return {
                ...state,
                ...{ dataSinhVienTuyenDung: action.payload.data },
            };

        case types.SEARCH_SINH_VIEN_TUYEN_DUNG_FAIL:
            return {
                ...state,
                dataSinhVienTuyenDung: [],
            };

        default:
            return state;
    }
};
