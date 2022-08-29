import * as types from "./type";
const INITSTATE = {
    dataVideo: [],
    loading: false,
};

export const videoReducer = (state = INITSTATE, action) => {

    switch (action.type) {

        case types.GET_ALL_VIDEO:
            return { ...state };

        case types.GET_ALL_VIDEO_SUCCESS:
            return {
                ...state,
                ...{ dataVideo: action.payload.data },
            };

        case types.GET_ALL_VIDEO_FAIL:
            return {
                ...state,
                dataVideo: [],
            };

        case types.POST_VIDEO:
            return { ...state };

        case types.POST_VIDEO_SUCCESS:
            return {
                ...state,
                dataVideo: [action.payload.data, ...state.dataVideo],
            };

        case types.POST_VIDEO_FAIL:
            return {
                ...state,
                dataVideo: [],
            };

        case types.DELETE_VIDEO:
            return { ...state };

        case types.DELETE_VIDEO_SUCCESS:
            return {
                ...state,
                dataVideo: state.dataVideo.filter(item => item.Id !== action.payload),
            };

        case types.DELETE_VIDEO_FAIL:
            return {
                ...state,
                dataVideo: [],
            };
        default:
            return state;
    }
};
