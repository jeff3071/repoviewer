import React, { useState,useEffect }  from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Repoicon from "../static/Repo.png";
import Forkicon from "../static/Fork.png";
import Staricon from "../static/Star.png";
import '../App.css'

function Repo() {

  const [ Params ] = useState(useParams())
  let [ Repodata , SetRepodata] = useState([])
  let [ Owner , SetOwner] = useState([])

  useEffect(()=>{
    fetch( 'https://api.github.com/repos/'+Params['username']+'/'+Params['reponame'],{method:"GET"})
      .then(res => res.json())
      .then((data)=> {
        console.log(data)
        SetOwner(data['owner'])
        SetRepodata(data)
      })
      .catch(e => {
        console.log(e);
      })
  },[Params]);


  return (
    <Card>
      <Card.Body>
        <Card.Title>
          
          <Card.Link href={Owner['html_url']}  className="normal-text">
            <img src={Repoicon} alt=""/>
            {Params['username']}/
          </Card.Link>
          
          <Card.Link href={Repodata['html_url']}  className="normal-text">
           {Params['reponame']}
          </Card.Link>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <Button variant="light" size="sm" disabled>
            <img  src={Staricon} alt=""/>
            {Repodata['stargazers_count']}
          </Button>
          <Button variant="light" size="sm" disabled>
            <img  src={Forkicon} alt=""/>
            {Repodata['forks_count']}
          </Button>
          
        </Card.Subtitle>
        <Card.Text>
          {Repodata['description']}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}


export default Repo;