import React from "react";
import './socialfollow.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow(props) {
  return (
    <div className="social-container" {...props}>
    
      <a href="https://www.youtube.com/channel/UCwLD06iwY_DVGaREk-41Cug"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
  
<a href="https://www.facebook.com/learnbuildteach/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://www.twitter.com/jamesqquick" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/learnbuildteach"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
    </div>
  );
}