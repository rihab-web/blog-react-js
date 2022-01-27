import React ,{useState}from 'react'
import { NavLink} from 'react-router-dom'
import './style.css';
import searchic from '../../assets/icons/search.png'

/**
 *  @author
 * @function Navbar
 **/

const Navbar = (props)=> {
    const [ search,setSearch] = useState(false)
const openSearch=()=>{
setSearch(true);

}
    const submitSearch=(e) =>{
e.preventDefault();
alert('Searched');
    }

    const searchClass= search? 'searchInput active':'searchInput';
    return (
    
         <div className="navbar">
             <ul className="navbarMenu">
                 <li><NavLink to="/"> Actualités</NavLink></li>
                 <li><NavLink to="/post"> Dossier</NavLink></li>
                 <li><NavLink to="/a-propos-nous"> A propos nous </NavLink></li>
                 <li><NavLink to="/forum"> Forum </NavLink></li>
                 <li><NavLink to="/partenariats"> Partenariats </NavLink></li>
                 <li><NavLink to="newsletters"> Newsletters </NavLink></li>
                 <li><NavLink to="/annonces"> Annonces </NavLink></li>
                 <li><NavLink to="/contact"> Contact </NavLink></li>
                 
                 
                 </ul>  
                 <div className="search">
                     <form onSubmit={submitSearch}>
                     <input type="text" className={searchClass} placeholder="Search"/>
                     <img onClick = {openSearch}className="searchIcon" src={searchic}alt="Search"/>
                     </form>
                     
                 </div>

         </div>
    
    )
}
export default Navbar