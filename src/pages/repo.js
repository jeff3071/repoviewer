import React, { useState,useEffect }  from "react";
import { useParams } from "react-router-dom";
import '../App.css'
import Repodetail from "../components/repodetail";

function Repo() {

  const [ Params ] = useState(useParams())
  let [ Repodata , SetRepodata] = useState([])
  let [ Owner , SetOwner] = useState([])

  useEffect(()=>{
    function getRepodata(){
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
    }
    getRepodata()
  },[Params]);


  return (
    <Repodetail owner={Owner} repodata={Repodata} reponame={Params['reponame']}></Repodetail>
  )
}


export default Repo;