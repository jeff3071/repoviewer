import React, { useState,useEffect }  from "react";
import { useParams } from "react-router-dom";

function User () {
  const [ Params ] = useState(useParams())
  let [ Userdata , SetUserdata] = useState([])
  useEffect(()=>{
    fetch( 'https://api.github.com/users/'+Params['username']+'/repos',{method:"GET"})
      .then(res => res.json())
      .then((data)=> {
        SetUserdata(data)
      })
      .catch(e => {
        console.log(e);
      })
  },[]);
  let lists = Userdata.map((repo,index) => 
       <li key={index}><a href={`/users/${Params['username']}/repos/${repo['name']}`}>{repo['name']}</a></li>)
  return (
    <div> 
      {lists}
    </div>
  )
}

export default User;