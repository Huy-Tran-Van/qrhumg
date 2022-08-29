import * as types from "./type";
const INITSTATE = {
  dataMenu: [],
  loading: false,
};

export const menuReducer = (state = INITSTATE, action) => {
  switch (action.type) {
    case types.GET_MENU:
      return { ...state, loading: true };
    case types.GET_MENU_SUCCESS:
      return {
        ...state,
        ...{ dataMenu: action.payload.data, loading: true },
      };
    case types.GET_MENU_FAIL:
      return {
        ...state,
        dataMenu: [],
        loading: false,
      };
    default:
      return state;
  }
};
