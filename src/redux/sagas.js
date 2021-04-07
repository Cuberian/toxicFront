import {takeEvery, put, call} from "redux-saga/effects";
import {FETCH_GROUPS, REQUEST_GROUPS} from "./types";
import {hideLoader, showAlert, showLoader} from "./action";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_GROUPS, sagaWorker)
}
function* sagaWorker() {
    try{
        yield put(showLoader())
        const payload = yield call(fetchGroups)
        yield put({type: FETCH_GROUPS, payload})
        yield put(hideLoader())
    } catch (e) {
        yield put(showAlert('Что-то пошло не так, малятки'))
        yield put(hideLoader())
    }

}

async function fetchGroups() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    return await response.json();
}