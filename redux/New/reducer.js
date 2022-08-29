import * as types from "./type";
const INITSTATE = {
    dataNew: [],
    loading: false,
};

export const newReducer = (state = INITSTATE, action) => {

    switch (action.type) {

        case types.GET_NEW:
            return { ...state };

        case types.GET_NEW_SUCCESS:
            return {
                ...state,
                ...{ dataNew: action.payload.data },
            };

        case types.GET_NEW_FAIL:
            return {
                ...state,
                dataNew: [],
            };
        default:
            return state;
    }
};
