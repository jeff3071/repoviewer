/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import { Card, Badge, Button} from "react-bootstrap";
import Repoicon from "../static/Repo.png";
import Forkicon from "../static/Fork.png";
import Staricon from "../static/Star.png";
import '../App.css'


class Repoitem extends React.Component {
  
  render(){
    return (
      
          <Card.Body>
            <Card.Title><img src={Repoicon} alt=""/>{this.props.repo['name']}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <Badge pill bg="secondary">
                {this.props.repo['language']}
              </Badge>
              <Button variant="light" size="sm" disabled>
                <img  src={Staricon} alt=""/>
                {this.props.repo['stargazers_count']}
              </Button>
              <Button variant="light" size="sm" disabled>
                <img  src={Forkicon} alt=""/>
              {this.props.repo['forks_count']}
              </Button>
            </Card.Subtitle>
            <Card.Text>
              {this.props.repo['topics'].map((tag, index)=><Badge pill key={index} bg="dark">{tag}</Badge>)}

              <a href={`/users/${this.props.username}/repos/${this.props.repo['name']}`} className="stretched-link"></a>
            </Card.Text>
          </Card.Body>
    )
  }
}

export default Repoitem;