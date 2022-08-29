import { takeLatest, put } from 'redux-saga/effects';

import * as types from "./type"
import * as actions from "./action"
import axios from "axios"
import { LOCALHOST_URL_API_STRAPI } from '../../ultis';

function* getNewSaga() {

    try {
        const res = yield axios.get(`${LOCALHOST_URL_API_STRAPI}/api/news?populate=*`)

        if (res) {

            yield put(actions.getNewSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getNewFail(error))

    }
}

export function * watchingGetNew() {

    yield takeLatest(types.GET_NEW, getNewSaga);
}
