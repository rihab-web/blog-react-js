import React from 'react';
import './style.css';
import Card from '../../componenets/UI/Card';
import Sidebar from '../../componenets/Sidebar';
import RecentPosts from './RecentPosts';
import blogData from '../../data/blog.json';
import Layout from '../../componenets/Layout';
const SideImage=props=>{


    return(
<div  style={{height:`${props.height}px`}}>
    <img src={props.src} alt=""/>
    <div className="title">
<span className="text" >{props.titleArrays}</span>

</div>
</div>
    );
}
const ImageGallary=props=>(
    
    <div className="gallaryPost" style={props.gallaryStyle}>
    <section className="imagecontainer" style={{ width:props.largeWidth}}>
<div className="mainImageWrapper" >
<img src={require('../../blogPostImages/' + props.imagesArray[2] ).default}alt=""/>
</div>
<div className="title">
<span className="text" >{props.titleArray[2]}</span>

</div>

</section>

<section className="sideImageWrapper"style={{ width:props.smallWidth}}>

{
    props.imagesArray.map(image=>
    
<SideImage height= {props.sideImageHeight}
src={require('../../blogPostImages/' +image ).default}alt=""/>
    )
}

</section>
    </div>


);

const Home = props => {

    const gallaryHeight=450;
    const gallaryStyle={
        height: gallaryHeight +'px',
        overflow:'hidden'
    }
const sideImageHeight= gallaryHeight/3;
const imgAr= blogData.data.map(post=>post.blogImage)
const title=blogData.data.map(post=>post.blogTitle)
    return (
   <div>
       
       <Card >
           <ImageGallary
           largeWidth="70%"
           smallWidth="30%"
           sideImageHeight={sideImageHeight}
           gallaryStyle={gallaryStyle}
           imagesArray={imgAr}
           titleArray={title}
           
           
           />
      
       </Card>
     
           <Layout>
           <RecentPosts style={{width:'70%'}}/>
          
           </Layout>
           
       
   </div>
    )
}

export default Home;
