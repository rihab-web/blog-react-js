import React ,{useState,useEffect}from 'react';
import './style.css';
import Card from '../../../componenets/UI/Card';
import blogPost from '../../../data/blog.json';

import { NavLink} from 'react-router-dom'
/**
 *  @author
 *@function RecentPosts
 **/
const RecentPosts = (props) => {

  
    const[posts,setPosts]=useState([]);

    useEffect(() =>{
       
        const posts=blogPost.data
        setPosts(posts);
    },[posts]);

    return (
      
        <div style={props.style}>
             { blogPost.data.map(data => {
                 return (
<div key={data.id}>
        <Card   style={{marginBottom:"20px "}}>
       <div className="postImageWrapper">
           <img src={require('../../../blogPostImages/' + data.blogImage ).default} alt=""/>
           </div> 
           <div style={{textAlign:'center'}}> 
           <span className="blogCategory "> {data.blogCategory}</span>
           <h2 className="postTitle">{data.blogTitle}</h2>
           <span className="postedBy"> {data.postedOn}</span>
           <p className="postContent">{data.blogText}</p>
           <NavLink  key={data.id}to={`/post/${data.slug}`}>
           <button className="button"> Read More</button>
           </NavLink>
           </div>
         
    </Card>
    </div>
                 )
      }
      )
         }
        </div>
        
 );          
}
   


export default RecentPosts;