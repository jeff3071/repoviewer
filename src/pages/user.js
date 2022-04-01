import React, { useState,useEffect }  from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Badge, Button, Figure, Row, Col } from "react-bootstrap";
import Repoicon from "../static/Repo.png";
import Forkicon from "../static/Fork.png";
import Staricon from "../static/Star.png";
import '../App.css'

function User () {
  const Params  = useParams()
  let [ Userdata , SetUserdata] = useState([])
  let [ Owner , SetOwner] = useState([])
  useEffect(()=>{
    fetch( 'https://api.github.com/users/'+Params['username']+'/repos',{method:"GET"})
      .then(res => res.json())
      .then((data)=> {
        console.log(data)
        SetOwner(data[0]['owner'])
        SetUserdata(data)
      })
      .catch(e => {
        console.log(e);
      })
  },[Params]);
  
  let Repolists = Userdata.map((repo,index) => 
    <Link key={index} to={`/users/${Params['username']}/repos/${repo['name']}`} className="normal-text">
      <Card>
        <Card.Body>
          <Card.Title><img src={Repoicon} alt=""/>{repo['name']}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Badge pill bg="secondary">
              {repo['language']}
            </Badge>
            <Button variant="light" size="sm" disabled>
              <img  src={Staricon} alt=""/>
             {repo['stargazers_count']}
            </Button>
            <Button variant="light" size="sm" disabled>
              <img  src={Forkicon} alt=""/>
             {repo['forks_count']}
            </Button>
          </Card.Subtitle>
          <Card.Text>
            {repo['topics'].map((tag, index)=><Badge pill key={index} bg="dark">{tag}</Badge>)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
  

  return (
    <Row>
      <Col xs={3}>
        <Figure>
          <Figure.Image
            src={Owner['avatar_url']}
            className="avatar"
          />
          <Figure.Caption>
            <Link className="username normal-text" to={Owner['html_url']}>{Owner['login']}</Link>
          </Figure.Caption>
        </Figure>
      </Col>
      <Col xs={9}>
        {Repolists}
      </Col>
    </Row>
  )
}

export default User;