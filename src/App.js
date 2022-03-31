import React from 'react';
import User from "./components/user"
import Repo from "./components/repo"
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: []
    }
  }
  handleClick() {
    console.log('取得資料')
    fetch( 'https://api.github.com/users/'+this.state.username+'/repos',{method:"GET"})
    .then(res => res.json())
    .then((data)=> {
      this.setState({repos: data})
    
    })
    .catch(e => {
      console.log(e);
    })
  }
  render () {
    return (
      <div>
        <input placeholder="username" type="text" onChange={(e) => {this.setState({username: e.target.value})}}></input>
        <ul>
          <li>
            <Link to={`/users/${this.state.username}/repos`} 
                  onClick={() => this.handleClick()}>查詢</Link>
          </li>
        </ul>
        <Routes>
          <Route path={'/users/:username/repos'} element={<User repos={this.state.repos} username={this.state.username}/>}/>
          <Route path={'/users/:username/repos/:reponame'} element={<Repo/>}/>
        </Routes>
      </div>
    )}; 
}

export default App;
