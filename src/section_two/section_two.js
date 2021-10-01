import React from 'react'
import image from '../resources/images/img/img-1.png'
import image_2 from '../resources/images/img/img-2.png'
import classes from './section_two.module.css'
import Fade from 'react-reveal/Fade';
function Section_two() {
 return (
  <div className={classes.holder} id="aboutus">
    <Fade right>
  <div className={classes.container}>
    <img src={image} />
   <article className={classes.fooditem}>
    <h2>We Pride Ourselves On Making Real Food From The Best Ingredients.</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
    <button>Learn more </button>
   </article>
  </div>
  <div className={classes.container}>
   <article className={classes.fooditem}>
    <h2>We Make Everything By Hand With The Best Possible Ingredients.</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    <ul>
     <li>Etiam sed dolor ac diam volutpat.</li>
     <li>Erat volutpat aliquet imperdiet.</li>
     <li>purus a odio finibus bibendum.</li>
    </ul>
    <button>Learn more </button>
   </article>
    <img src={image_2} />
  </div>
  </Fade>
  </div>
 )
}

export default Section_two
