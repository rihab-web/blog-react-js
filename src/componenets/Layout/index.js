import React from 'react'
import Footer from '../../containers/Footer';
import Sidebar from '../Sidebar';
import './style.css';

/**
 *@author 
 * @function Layout
 
 **/

 const Layout= (props) => {
     return (
         <React.Fragment>
<div className="container">
             {props.children}
<Sidebar/>
         </div>
         <div>
            <Footer/>
         </div>
         </React.Fragment>
         
     )
 }

 export default Layout;