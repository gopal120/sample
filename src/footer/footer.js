import React from 'react'
import classes from './footer.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter'
import YoutubeIcon from '@material-ui/icons/YouTube'
import Linkedin from '@material-ui/icons/LinkedIn'
import Instagram from '@material-ui/icons/Instagram'
function Footer() {
return (
  <footer className={classes.footer}>
    <div className={classes.icons}>
   < FacebookIcon />
   <TwitterIcon />
   <YoutubeIcon  />
   <Linkedin  />
   <Instagram />
    </div>
    <div className={classes.subscribe}>
     <input type="search" placeholder="Email Address Here" />
     <button className={classes.button}>Subscribe</button>
    </div>
     <p> 	&#169;. All rights Reserved</p>
  </footer>
 )
}

export default Footer
