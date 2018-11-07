import { call, all, put, takeLatest } from 'redux-saga/effects'

import * as api from './api.js'
import { delay } from 'redux-saga'
import { getUserListSuccess, getUserSuccess, userLoadingState } from './redux/actions.js'

// worker Saga: 
function* fetchList(action) {
  try {
    const userList = yield call(api.fetchList, action.company);
    yield put(getUserListSuccess(userList, action.company));
  } catch (e) {
    alert("no users at this organization ")
    yield put({ type: "FETCH_FAILED", message: e.message });
  }
}

function* fetchUser(action) {
  try {
    yield put(userLoadingState(true)); //show preloader
    const [user, repo, orgList] = yield all([
      call(api.fetchUser, action.id),
      call(api.fetchUserRepo, action.id),
      call(api.fetchUserOrgs, action.id)
    ])
    user.data.repoList = repo.data
    user.data.orgList = orgList.data
    //yield delay(500)
    yield put(getUserSuccess(user));
    yield put(userLoadingState(false)); //remove preloader
  } catch (e) {
    yield put({ type: "FETCH_FAILED", message: e.message });
  }
}


function* mySaga() {
  yield takeLatest("USERLIST_FETCH_REQUESTED", fetchList);
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}


export default mySaga;