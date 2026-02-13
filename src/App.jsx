import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddStudent from "./pages/AddStudent"
import ViewStudent from "./pages/ViewStudent"
import Nav from "./components/Nav"
const App = ()=>{

  return(
    <>
      
      <Router>
        <Nav/>
        <Routes>
          <Route path='/addstudent' element={<AddStudent/>}/>
          <Route path='/viewstudent' element={<ViewStudent/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App