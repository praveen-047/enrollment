import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const AddStudent = () => {
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[depertment,setdpt] = useState("")
  const[course,setCourse] = useState("")

  const navigate = useNavigate()
  
  
  function handleForm(e){
    e.preventDefault()
    let user = {name,email,depertment,course}
    console.log("handle form function");
    
    axios.post("http://localhost:5000/users",user)
    .then(()=>{
      setName("")
      setEmail("")
      setdpt("")
      setCourse("")
      navigate("/viewstudent")
    })
    .catch(err=>console.log(err));
    
  }
  
  return (
    <>
      <center>Add Student</center>
      <center>
        <form action="post" onSubmit={handleForm}>
          <input type="text" placeholder='enter name' value={name}  onChange={(e)=>setName(e.target.value)}/>
          <br />
          <input type="text" placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <br />
          <input type="text" placeholder='enter depertment' value={depertment} onChange={(e)=>setdpt(e.target.value)}/>
          <br />
          <input type="text" placeholder='enter course' value={course} onChange={(e)=>setCourse(e.target.value)}/>
          <br />
          <button type='submit'>Add Student</button>
        </form>
      </center>
    </>
  );
};

export default AddStudent;