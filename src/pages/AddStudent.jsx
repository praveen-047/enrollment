import React, { useState } from 'react';

const AddStudent = () => {
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[depertment,setdpt] = useState("")
  const[course,setCourse] = useState("")
  
  function handleForm(e){
    e.preventDefault()
    let user = {name,email,depertment,course}
  }
  
  return (
    <>
      <center>Add Student</center>
      <center>
        <form>
          <input type="text" placeholder='enter name' value={name}  onChange={(e)=>setName(e.target.value)}/>
          <br />
          <input type="text" placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <br />
          <input type="text" placeholder='enter depertment' value={depertment} onChange={(e)=>setdpt(e.target.value)}/>
          <br />
          <input type="text" placeholder='enter course' value={course} onChange={(e)=>setCourse(e.target.value)}/>
        </form>
      </center>
    </>
  );
};

export default AddStudent;