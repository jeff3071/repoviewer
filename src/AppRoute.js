import React from "react";
import User from "./components/user"
import Repo from "./components/repo"
import {
  Routes,
  Route,
} from "react-router-dom";

class AppRoute extends React.Component {
  render () {
    return (
      <Routes>
        <Route path={'/users/:username/repos'} element={<User/>}/>
        <Route path={'/users/:username/repos/:reponame'} element={<Repo/>}/>
      </Routes>
    )
  }
}

export default AppRoute;