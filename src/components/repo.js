import React, { useState,useEffect }  from "react";
import { useParams } from "react-router-dom";


function Repo() {

  const [ Params ] = useState(useParams())
  let [ Repodata , SetRepodata] = useState([])

  
  useEffect(()=>{
    fetch( 'https://api.github.com/repos/'+Params['username']+'/'+Params['reponame'],{method:"GET"})
      .then(res => res.json())
      .then((data)=> {
        console.log(1)
        SetRepodata(data)
      })
      .catch(e => {
        console.log(e);
      })
  },[]);


  return (
    <div> 
      {Params['reponame']}
      {Repodata['id']}
    </div>
  )
}


export default Repo;