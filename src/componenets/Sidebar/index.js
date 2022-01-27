import React,{useState,useEffect} from 'react'
import './style.css';
import Card from '../UI/Card'
import img from '../../blogPostImages/logobig.png'
import blogPost from '../../data/blog.json'
import { NavLink} from 'react-router-dom'
import SocialFollow from "../Header/SocialFollow"
/**
 *  @author
 * @function Sidebar
 **/

const Sidebar = (props)=> {

    const[posts,setPosts]=useState([]);

    useEffect(() =>{
       
        const posts=blogPost.data
        setPosts(posts);
    },[posts]);
    return (
      
    <div className="sidebarContainer">
<Card style={{marginBottom:'20px',padding:"20px",boxSizing:'border-box'}}>
        <div className="cardHeader">
            <span> About Us</span>

        </div>
        <div className="profileImageContainer">
    <img src={img} alt=""/>
</div>
<div className="cardBody">
<p className="personalBio">agence boomerang de communication est agence de com jjjjjjjjj</p>
</div>
    </Card>
    <Card style={{marginBottom:'20px',padding:"20px",boxSizing:'border-box'}}>
        <div className="cardHeader">
        <SocialFollow style={{ backgroundColor:"white"}} />

        </div>
    </Card>
    <Card style={{marginBottom:'20px',padding:"20px",
    boxSizing:'border-box'}}>
    <div className="cardHeader">
            <span> Recent posts</span>

        </div>
  
<div className="recentPosts">

{
    posts.map(post=>{
        return(
            <NavLink  key={post.id}to={`/post/${post.slug}`}>
            <div className="recentPost">
    <h3 > {post.blogTitle}</h3>
<span>{post.postedOn} </span>
</div>
            </NavLink>

        );
    })
}
    


</div>
    </Card>

    </div>

    
    )
}
export default Sidebar