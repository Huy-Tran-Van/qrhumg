import * as types from "./type";
const INITSTATE = {
    dataKhoa: [],
    dataKhoaFilter: [],
    dataAllKhoaFilter: [],
    loading: false,
    maxPage: 0,
    countData: 0,
};

export const khoaReducer = (state = INITSTATE, action) => {

    switch (action.type) {

        case types.GET_KHOA:
            return { ...state };

        case types.GET_KHOA_SUCCESS:

            console.log("action.payload.data", action.payload.data);

            return {
                ...state,
                ...{ dataKhoa: action.payload.data },
                maxPage: action?.payload?.page?.maxPage,
                countData: action?.payload?.page?.countData,
            };

        case types.GET_KHOA_FAIL:
            return {
                ...state,
                dataKhoa: [],
            };

        case types.ADD_KHOA:
            return { ...state, loading: true };

        case types.ADD_KHOA_SUCCESS:
            return {
                ...state,
                dataKhoa: [...state.dataKhoa, action.payload.data],
            };

        case types.ADD_KHOA_FAIL:
            return {
                ...state,
                dataKhoa: [],
            };

        case types.DELETE_KHOA:
            return { ...state, loading: true };

        case types.DELETE_KHOA_SUCCESS:
            return {
                ...state,
                dataKhoa: state.dataKhoa.filter((item) => item.Id !== action.payload),
            };

        case types.DELETE_KHOA_FAIL:
            return {
                ...state,
                dataKhoa: [],
                loading: false,
            };

        // case types.UPDATE_KHOA:
        //     return { ...state, loading: true };

        // case types.UPDATE_KHOA_SUCCESS:
        //     return {
        //         ...state,
        //         ...{ loading: false },

        //     };

        // case types.UPDATE_KHOA_FAIL:
        //     return {
        //         ...state,
        //         dataKhoa: [],
        //         loading: false,
        //     };

        case types.SEARCH_KHOA:
            return { ...state, loading: true };

        case types.SEARCH_KHOA_SUCCESS:
            return {
                ...state,
                ...{ dataKhoa: action.payload.data },
            };

        case types.SEARCH_KHOA_FAIL:
            return {
                ...state,
                dataKhoaFilter: [],
            };

        case types.GET_KHOA_FILTER:
            return { ...state };

        case types.GET_KHOA_FILTER_SUCCESS:

            return {
                ...state,
                ...{ dataKhoaFilter: action.payload.data[0] },

            };

        case types.GET_KHOA_FILTER_FAIL:

            return {
                ...state,
                dataKhoaFilter: [],
            };

        case types.GET_ALL_KHOA_FILTER:

            return {
                ...state
            }

        case types.GET_ALL_KHOA_FILTER_SUCCESS:
            
            return {
                ...state,
                ...{ dataAllKhoaFilter: action.payload.data }
            }
        
        case types.POST_KHOA_FILTER: 
            
            return {
                ...state
            }
        
        case types.POST_KHOA_FILTER_SUCCESS:

            return {
                ...state,
                dataAllKhoaFilter: [...state.dataAllKhoaFilter, action.payload.data]
            }

        case types.POST_KHOA_FILTER_FAIL:

            return {
                ...state,
            }
        default:
            return state;
    }
};
