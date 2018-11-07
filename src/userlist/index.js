import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUserList } from '../redux/actions.js'
import UserItems from './UserList'
import { withRouter, Redirect } from 'react-router-dom'
import './Nav.css'

export class UserList extends Component {
  state = { newList: false }
  componentDidMount() {
    this.props.fetchUserList();
  }
  componentDidUpdate(prevProps) {
    if (this.props.userList[0].id != prevProps.userList[0].id) {
      this.setState({ newList: true }, () => {
        this.setState({ newList: false })
      })
    }
  }
  render() {
    return (
      <nav className="nav col-md-3">
        {this.state.newList &&
          <Redirect to='/members' />
        }
        {this.props.userList.length > 0 ? (
          <div>
            <p className="member-title">GitHub members of <b>{this.props.company}</b></p>
            <UserItems list={this.props.userList} />
            <p>demo limited to first 30 members</p>
          </div>
        ) : (
            <h4>No Employees found in GitHub</h4>
          )}
      </nav>
    );
  }
}


const mapStateToProps = state => {
  return {
    userList: state.userList,
    company: state.company
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserList: () => {
      dispatch(getUserList("google"))
    }
  }
}

//wrapping withRouter so Navlink highlighting works
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList))
