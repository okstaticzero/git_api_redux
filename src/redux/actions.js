export const getUserList = (company) => {
  return {
    type: "USERLIST_FETCH_REQUESTED",
    company
  }
}

export const getUserListSuccess = (payload, company) => {
  return {
    type: "USERLIST_FETCH_SUCCEEDED",
    payload,
    company
  }
}


export const getUser = (id) => {
  return {
    type: "USER_FETCH_REQUESTED",
    id
  }
}


export const getUserSuccess = (payload) => {
  return {
    type: "USER_FETCH_SUCCEEDED",
    payload
  }
}


export const changeUser = (id) => {
  return {
    type: "CHANGE_USER",
    id
  }
}


export const userLoadingState = (isLoading) => {
  return {
    type: "LOADING_STATE_USER",
    isLoading
  }
}