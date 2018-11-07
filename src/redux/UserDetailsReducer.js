const userDetailsReducer = (state={}, action)=>{
  switch(action.type){

    case "USER_FETCH_SUCCEEDED" :
      const {data} = action.payload

      return {...state, [data.login]:data}
    default:
      return state  

  }
      
}

export default userDetailsReducer