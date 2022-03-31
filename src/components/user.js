import React from "react";


class User extends React.Component {
  render(){
    let lists = this.props.repos.map((repo,index) => 
        <li key={index}><a href={`/users/${this.props.username}/repos/${repo['name']}`}>{repo['name']}</a></li>)

    return (
      <div> 
        {lists}
      </div>
    )
  }
}

export default User;