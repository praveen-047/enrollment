import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../styles/global.css'
import { useNavigate } from 'react-router-dom';


const ViewStudent = () => {
  const [users, setUser] = useState([])

  const navigate = useNavigate()


  useEffect(() => {
    fetchData();
  }, [users])


  function fetchData() {
    axios.get("http://localhost:5000/users")
      .then((x) => setUser(x.data))
      .catch((err) => console.log(err))
  }

  function handleUpdate(id){
    navigate(`/updateStudent/${id}`)
  }

  function handleDelete(id){
    axios.delete(`http://localhost:5000/users/${id}`)
    .then(()=>{
      fetchData()
    }).catch(err=>console.log(err)
    )
  }



  return (
    <>
      <center><h1>Students Record</h1></center>
      <div className='view-container'>

        {users.map((each) => (
          <div className='view-card'>
            <p>Name: {each.name}</p>
            <p>Email: {each.email}</p>
            <p>Depertment: {each.depertment}</p>
            <p>Course: {each.course}</p>
            <button className='edit' onClick={()=>handleUpdate(each.id)}>Edit</button>
            <button className='delete' onClick={()=>handleDelete(each.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>

  );
};

export default ViewStudent;