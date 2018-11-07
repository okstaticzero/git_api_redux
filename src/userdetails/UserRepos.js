import React from 'react';

const UserRepos =({repoList, name}) =>(
  <div className="col-md-6">
    <h4>Repos by: {name}</h4>
    <ul className="user-repo-list">
        {
          repoList.map(item=>(
            <li key={item.id}><a href={item.html_url} target="_blank">{item.full_name}</a></li>
          ))
        }
    </ul>
  </div>  
)


export default UserRepos