import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import '../App.css'
import Repoitem from "../components/repoitem";
import Userinfo from "../components/userinfo";

function User () {
  const Params  = useParams()
  let [ Userdata , SetUserdata] = useState([])
  let [ Owner , SetOwner] = useState([])
  let [ Page , SetPage ] = useState(1)
  let [ Flag, SetFlag ] = useState(true)

  const getrepolist = () => {
    fetch( 'https://api.github.com/users/'+Params['username']+'/repos?sort=created&per_page=10&page='+Page,{method:"GET"})
      .then(res => res.json())
      .then((data)=> {
        if(Object.keys(data).length !== 0){
          console.log('get data', Page)
          SetOwner(data[0]['owner'])
          SetUserdata([...Userdata,...data])
          SetPage(Page+1)
        }else {
          console.log('set flag to false')
          SetFlag(false)
        }
      })
      .catch(e => {
        console.log(e);
      })
  }

  useEffect(()=>{
    getrepolist();
  },[]);

  let Repolists = Userdata.map((repo,index) => 
    <Repoitem key={index} repo={repo} username={Params['username']}></Repoitem>
  )

  window.onscroll = function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    let windowHeight = document.documentElement.clientHeight || document.body.clientHeight
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    if (scrollTop + windowHeight === scrollHeight) {
      console.log('button')
      if(Flag){
        getrepolist()
      }
    }
  }
  return (
    <Row>
      <Col xs={3}>
        <Userinfo user={Owner}></Userinfo>
      </Col>
      <Col xs={9}>
        {Repolists}
      </Col>
    </Row>
  )
}

export default User;