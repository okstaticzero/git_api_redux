import React from 'react';
import {  NavLink } from 'react-router-dom'

const UserItems = ({list}) =>(
  <div className="userList btn-group-vertical">
    {
      list.map(item=>(
          <NavLink key={item.id} to={'/member/'+ item.login} className="btn btn-default" >{item.login}</NavLink>
      ))
    }
  </div>
)

export default UserItems