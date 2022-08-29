import * as types from "./type";
const INITSTATE = {
    dataViTriUngTuyen: [],
    loading: false,
};

export const viTriUngTuyenReducer = (state = INITSTATE, action) => {

    switch (action.type) {

        case types.GET_VI_TRI_UNG_TUYEN:
            return { ...state };

        case types.GET_VI_TRI_UNG_TUYEN_SUCCESS:
            return {
                ...state,
                ...{ dataViTriUngTuyen: action.payload.data },
            };

        case types.GET_VI_TRI_UNG_TUYEN_FAIL:
            return {
                ...state,
                dataViTriUngTuyen: [],
            };

        case types.ADD_VI_TRI_UNG_TUYEN:
            return { ...state, loading: true };

        case types.ADD_VI_TRI_UNG_TUYEN_SUCCESS:
            return {
                ...state,
                dataViTriUngTuyen: [...state.dataViTriUngTuyen, action.payload.data],
            };

        case types.ADD_VI_TRI_UNG_TUYEN_FAIL:
            return {
                ...state,
                dataViTriUngTuyen: [],
            };

        case types.DELETE_VI_TRI_UNG_TUYEN:
            return { ...state, loading: true };

        case types.DELETE_VI_TRI_UNG_TUYEN_SUCCESS:
            return {
                ...state,
                dataViTriUngTuyen: state.dataViTriUngTuyen.filter((item) => item.Id !== action.payload),
            };

        case types.DELETE_VI_TRI_UNG_TUYEN_FAIL:
            return {
                ...state,
                dataViTriUngTuyen: [],
                loading: false,
            };

        case types.UPDATE_VI_TRI_UNG_TUYEN:
            return { ...state, loading: true };

        case types.UPDATE_VI_TRI_UNG_TUYEN_SUCCESS:
            return {
                ...state,
                ...{ loading: false },

            };

        case types.UPDATE_VI_TRI_UNG_TUYEN_FAIL:
            return {
                ...state,
                dataViTriUngTuyen: [],
                loading: false,
            };

        case types.SEARCH_VI_TRI_UNG_TUYEN:
            return { ...state, loading: true };

        case types.SEARCH_VI_TRI_UNG_TUYEN_SUCCESS:
            return {
                ...state,
                ...{ dataViTriUngTuyen: action.payload.data },
            };

        case types.SEARCH_VI_TRI_UNG_TUYEN_FAIL:
            return {
                ...state,
                dataViTriUngTuyen: [],
            };

        default:
            return state;
    }
};
