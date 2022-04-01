import React from "react";
import { Figure } from "react-bootstrap";
import '../App.css'

class Userinfo extends React.Component {
  render() {
    return (
      <Figure>
        <Figure.Image
          src={this.props.user['avatar_url']}
          className="avatar"
        />
        <Figure.Caption>
          <a className="username normal-text" href={this.props.user['html_url']}>{this.props.user['login']}</a>
        </Figure.Caption>
      </Figure>
    )
  }
}
export default Userinfo;