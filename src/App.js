import React from 'react';
import { BrowserRouter, Route, Link , Switch} from "react-router-dom"
import user from "./components/user.js"
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputvalue: '',
    }
  }

  handleclick() {
    console.log(this.state)
    fetch( 'https://api.github.com/users/'+this.state.inputvalue+'/repos',{method:"GET"})
    .then(res => res.json())
    .then((data )=> {
      console.log(data);
    })
    .catch(e => {
      console.log(e);
    })
  }

  render () {
    return (
      <BrowserRouter>
        <input type="text" onChange={(e) => {this.state.inputvalue=e.target.value}}></input>
        {/* <button onClick={() => this.handleclick()}>取得</button> */}
        <ul>
          <li><Link to="users">查詢</Link></li>
        </ul>
        <Switch>
          <Route path='/users' component={user}/>
        </Switch>
      </BrowserRouter>
    )}; 
}
export default App;
