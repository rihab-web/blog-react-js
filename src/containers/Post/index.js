import React from 'react'
import './style.css';
import Card from '../../componenets/UI/Card'
import BlogPost from '../../componenets/BlogPost';
import Sidebar from '../../componenets/Sidebar';
import Layout from '../../componenets/Layout';
/**
 *  @author
 * @function Post
 **/

const Post = (props)=> {
    console.log(props);
    return (
    
        <Layout>
        <BlogPost {...props}/>  
        </Layout>
      
        
  
    
    
    )
}
export default Post