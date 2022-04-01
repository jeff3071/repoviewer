import React, { useState,useEffect }  from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
import '../App.css'

function User () {
  const Params  = useParams()
  let [ Userdata , SetUserdata] = useState([])
  useEffect(()=>{
    fetch( 'https://api.github.com/users/'+Params['username']+'/repos',{method:"GET"})
      .then(res => res.json())
      .then((data)=> {
        console.log(data)
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
          <Card.Title>{repo['name']}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Star: {repo['stargazers_count']}</Card.Subtitle>
          <Card.Text>
            {repo['topics'].map((tag, index)=><Badge key={index} bg="dark">{tag}</Badge>)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
  

  return (
    <div> 
      {Repolists}
    </div>
  )
}

export default User;