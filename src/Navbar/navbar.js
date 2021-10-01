import React,{useState} from 'react'
import logo from '../resources/images/logo.png'
import ReorderIcon from '@material-ui/icons/Reorder'
import { HashLink as Link } from "react-router-hash-link"
import "../App.css"
function Navbar(props) {
 const [showLinks,setShowLinks]=useState(false)
 return (
  <div className="Navbar" >
   <div className="leftside">
    <img src={logo} height='90px'/> 
   </div>
   <div className="rightside">
   <div className="links" id={showLinks?"hidden":""}>
    <Link smooth to="#home" >Home</Link>
    <Link smooth to="#aboutus" >About Us</Link>
    <Link smooth to="#explore">Explore</Link>
    <Link smooth to="#location">Contact us</Link>
    
    {!showLinks && < span className='contact'>1800 6525 863</span>}
    </div>
    <button onClick={()=>{setShowLinks(!showLinks)}}><ReorderIcon /></button>
   </div>
   
  </div>
 )
}

export default Navbar
