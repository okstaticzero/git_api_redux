import { combineReducers } from "redux";
import { userListReducer, company } from './UserListReducer.js'
import userDetails from './UserDetailsReducer.js'

const currentUser = (state = "", action) => {
  switch (action.type) {
    case "USER_FETCH_SUCCEEDED":
      const { data } = action.payload
      return data.login
    case "CHANGE_USER":
      return action.id
    default:
      return state
  }
}


const loadingStateUser = (state = false, action) => {
  switch (action.type) {
    case "LOADING_STATE_USER":
      return action.isLoading
    default:
      return state
  }
}

const rootReducer = combineReducers({
  userList: userListReducer,
  userDetails,
  company,
  currentUser,
  loadingStateUser
});

export default rootReducer