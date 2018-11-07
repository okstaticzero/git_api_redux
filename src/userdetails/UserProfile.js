import React from 'react';

const UserProfile =(props) =>(

  <div className="user-profile col-md-6">
    <h2>{props.user.login}</h2>
    <img className="user-photo" src={props.user.avatar_url} alt=""/>
    <h4>{props.user.name}</h4>
     <h5><b>Location:</b> {props.loc}</h5>
    <h5><b>Email:</b> {props.email}</h5>
    <h5><b>Join Date:</b> {props.date}</h5>
    <h5><b>Organizations:</b></h5>
    {
      props.user.orgList.map( item=>(
        <h5 key={item.id}><a href={"https://github.com/"+item.login} target="_blank">{item.login}</a></h5>
      ))
    }
    
  </div>
)



export default UserProfile