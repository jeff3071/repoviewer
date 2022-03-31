import React, { useState }  from "react";
import {
  Link
} from "react-router-dom";
import AppRoute from './AppRoute';

function App() {
  let [ Username , SetUsername] = useState([])
  return (
    <div>
      <input placeholder="username" type="text" onChange={(e) => {SetUsername(e.target.value)}}></input>
      <ul>
        <li>
          <Link to={`/users/${Username}/repos`}>查詢</Link>
        </li>
      </ul>
      <AppRoute/>
    </div>
  ) 
}

export default App;
