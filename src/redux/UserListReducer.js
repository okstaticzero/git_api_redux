export const userListReducer = (state = [], action) => {
  switch (action.type) {
    case "USERLIST_FETCH_SUCCEEDED":
      return [...action.payload.data]

    case "USER_FETCH_SUCCEEDED":
      const { data } = action.payload

      return state.map(item => {
        if (item.id === data.id) {
          return Object.assign({}, item, data)
        }
        return item
      })
    default:
      return state

  }
}

export const company = (state = "", action) => {
  switch (action.type) {
    case "USERLIST_FETCH_SUCCEEDED":
      return action.company
    default:
      return state

  }
}
