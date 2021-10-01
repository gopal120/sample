import React from 'react'
import video from '../resources/Restaurant - 1192.mp4'
import classes from './Section_one.module.css'

function Section_one() {

  

 return (
  <div className={classes.section} id="home" >
   <video autoPlay muted loop width='100%' id="myVideo">
    <source src={video} type="video/mp4" />
   </video>
   <div className={classes.title}>
     <h1>For The Love of Food </h1>
     <h6>Sorry—I’m in a relationship. With food.</h6>
   </div>
  </div>
 )
}

export default Section_one
