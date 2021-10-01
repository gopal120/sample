import React from 'react'
import classes from './section_three.module.css'
import image from '../resources/images/img/img-3.jpg'
import image_1 from '../resources/images/img/img-4.jpg'
import image_2 from '../resources/images/img/img-5.jpg'
//import FadeInAnimation from '../animation/animation'
import Fade from 'react-reveal/Fade';
function Section_three() {
   
 return (
   <div className={classes.container} >
    <Fade bottom>
   <header>
   Explore Our Foods
   </header> 
   <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
   <div className={classes.menu} id="explore" >
    <div className={classes.item}>
      <img src={image}/>
      <h2>10 Reasons To Do A Digital Detox Challenge</h2>
      <p>
      Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac…
      </p>
      <button>Read More</button>
    </div>
    <div className={classes.item}>
    <img src={image_1}/>
    <h2>The Ultimate Hangover Burger
</h2>
<p>Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac…</p>
      <button>Read More</button>
    </div>
    <div className={classes.item}>
    <img src={image_2}/>
    <h2>Traditional Soft Pretzels With Sweet Beer Cheese</h2>
    <p>Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac…</p>
      <button>Read More</button>
    </div>
   </div>
  </Fade>
  </div>
 )
}

export default Section_three
