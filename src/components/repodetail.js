import React from "react";

import { Card, Button, Badge } from "react-bootstrap";
import Repoicon from "../static/Repo.png";
import Forkicon from "../static/Fork.png";
import Staricon from "../static/Star.png";
import '../App.css'

class Repodetail extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            <a href={this.props.owner['html_url']}  className="normal-text" rel="noreferrer" target="_blank">
              <img src={Repoicon} alt=""/>
              {this.props.owner['login']}/
            </a>
            
            <a href={this.props.repodata['html_url']}  className="normal-text" rel="noreferrer" target="_blank"> 
              {this.props.reponame}
            </a>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Badge pill bg="secondary">
              {this.props.repodata['language']}
            </Badge>
            <Button variant="light" size="sm" disabled>
              <img  src={Staricon} alt=""/>
              {this.props.repodata['stargazers_count']}
            </Button>
            <Button variant="light" size="sm" disabled>
              <img  src={Forkicon} alt=""/>
              {this.props.repodata['forks_count']}
            </Button>
          </Card.Subtitle>
          <Card.Text>
            
            {this.props.repodata['description']}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Repodetail;