import React from "react"
import {Link} from 'react-router-dom'
import '../styles/nav.css'


const Nav = ()=>{

  return(
    <>
      <div className="nav">
        <div className="left">
          <div className="logo-div">
            <img src="https://pentagonspace.in/_nuxt/PentagonLogo.CLFPXG1l.png" alt="" />
          </div>
        </div>
        <div className="right">
          <Link className="nav-link" to={'/addstudent'}><h2>Add</h2></Link>
          <Link className="nav-link" to={'/viewstudent'}><h2>view</h2></Link>
        </div>
      </div>
    </>
  )
}

export default Nav