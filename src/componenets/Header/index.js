import React from 'react'
import './style.css';
import SocialFollow from "./SocialFollow"
/**
 *  @author
 * @function Header
 **/

const Header = (props)=> {
    return (
     <header className="header">
         <nav className="headerMenu">
<a href ="#"> Actulaités</a>
<a href ="#"> A propos de nous </a>
<a href ="#"> Contact </a>
         </nav>
         <div>
         <SocialFollow />
         </div>
     </header>
    )
}
export default Header