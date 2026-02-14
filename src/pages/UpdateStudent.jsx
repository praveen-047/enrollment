import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/global.css'
import axios from "axios"


const UpdateStudent = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[depertment,setdpt] = useState("")
    const[course,setCourse] = useState("")

    let {id}= useParams()    
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/users/${id}`)
        .then((x)=>{
            setName(x.data.name)
            setEmail(x.data.email)
            setdpt(x.data.depertment)
            setCourse(x.data.course)
        })
    },[])

    const navigate = useNavigate()

    function handleUpdate(e){
        e.preventDefault()
        let newData = {name,email,depertment,course}
        axios.put(`http://localhost:5000/users/${id}`,newData)
        .then(()=>{
            navigate("/viewstudent3")
        }).catch(err=>console.log(err))
    }

  return (
    <>
      <center>Update Student</center>
      <center>
        <form  onSubmit={handleUpdate}>
          <input type="text" placeholder='enter name' value={name}  onChange={(e)=>setName(e.target.value)}/>
          <br />
          <input type="text" placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <br />
          <input type="text" placeholder='enter depertment' value={depertment} onChange={(e)=>setdpt(e.target.value)}/>
          <br />
          <input type="text" placeholder='enter course' value={course} onChange={(e)=>setCourse(e.target.value)}/>
          <br />
          <button type='submit'>Update Student</button>
        </form>
      </center>
    </>
  )
}

export default UpdateStudent