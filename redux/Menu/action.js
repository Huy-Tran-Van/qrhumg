import * as types from "./type";

export const getDataMenu = () => ({
  type: types.GET_MENU,
});

export const getDataMenuSuccess = (data) => ({
  type: types.GET_MENU_SUCCESS,
  payload: data,
});

export const getDataMenuFail = (data) => ({
  type: types.GET_MENU_FAIL,
  payload: data,
});
