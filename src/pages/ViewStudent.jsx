import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
const ViewStudent = () => {
  const [users,setUser] = useState([])

  useEffect(()=>{
    fetchData();
  },[users])

  function fetchData(){
    axios.get("http://localhost:5000/users")
    .then((x)=>setUser(x.data))
    .catch((err)=>console.log(err))
  }
  return (
    <div className='view-container'>
      <h1>Students Record</h1>
      {users.map((each)=>(
        <div className='view-card'>
          <p>name:{each.name}</p>
          <p>email:{each.email}</p>
          <p>depertment:{each.depertment}</p>
          <p>course:{each.course}</p>
          <button className='edit'>Edit</button>
          <button className='delete'>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ViewStudent;