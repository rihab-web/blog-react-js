import React from 'react'
import './style.css';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
/**
 *  @author
 * @function ContactUs
 **/

const Footer = (props)=> {
    return (
        <div className="footer">
        <div className="socialMedia">
        <a href="https://www.instagram.com/learnbuildteach"
>
          <InstagramIcon /> </a>
          <a href="https://www.instagram.com/learnbuildteach"
>
          <TwitterIcon /> 
          </a>
          <a href="https://www.instagram.com/learnbuildteach"
>
          <FacebookIcon /> 
          </a>
          <a href="https://www.instagram.com/learnbuildteach"
>
          <LinkedInIcon />
          </a>
        </div>
        <p> &copy; contact@agence-boomerang-communication.com</p>
      </div>
    
    )
}
export default Footer;