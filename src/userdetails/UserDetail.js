import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import UserRepos from './UserRepos.js'
import UserProfile from './UserProfile.js'
import moment from "moment"
import { getUser, changeUser} from '../redux/actions.js'
import spinner from '../img/spinner.svg';

class UserDetail extends Component {
  constructor(props){
    super(props)
    this.state = {userData:{}}
    
  }
  componentDidMount(){
    this.fetchUser()
  }
  
  componentDidUpdate(prevProps, prevState){
    if (this.props.location !== prevProps.location) {
      this.fetchUser()
    }
  }

  fetchUser(){
    const id = this.props.match.params.id
    const {userDetails} = this.props

    if(userDetails.hasOwnProperty(id)){
      //already cached so...
      this.props.changeUser(id)
      return
    }
      this.props.fetchUser(id)
  }


  render() {
    
    let d = moment(this.props.user.created_at)
    let date = d.format('MMMM Do YYYY')
    let email = this.props.user.email ? this.props.user.email : "N/A"
    let loc = this.props.user.location ? this.props.user.location : "N/A"

    return (
      <div>
        {!this.props.loadingStateUser &&
          <div>
            <UserProfile email={email} loc={loc} date={date} {...this.props} />
            <UserRepos name={this.props.user.login} repoList={this.props.user.repoList} />
          </div>
        }
        {this.props.loadingStateUser &&
          <div className="spinner-outer">
           <img className="spinner" src={spinner} alt="spinner" />
          </div> 
        }
        
      </div>
    );
  }
}

UserDetail.defaultProps = {
  user: {
    repoList:[],
    orgList:[]
  }
};


const getUserOb = (login, userDetails) =>{
  return userDetails[login]
}  

const mapStateToProps = state => {
  return {
    currentUser:state.currentUser,
    user: getUserOb(state.currentUser, state.userDetails),
    userDetails: state.userDetails,
    loadingStateUser:state.loadingStateUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => {
      dispatch(getUser(id))
    },
    changeUser:(id)=>{
      dispatch(changeUser(id))
    }
  }
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail))