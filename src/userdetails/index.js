import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import UserDetail from './UserDetail'
import './User.css'

export class UserDetails extends Component {
  render() {
    return (
      <div className="user col-md-8">
        <Switch>
          <Route path="/member/:id" component={UserDetail} />
          <Route render={() => <div>
            <h3>Example React/Redux project using GitHub api </h3>
            <h4>Select a member to view their details</h4>
          </div>} />
        </Switch>
      </div>
    );
  }
}

export default UserDetails
