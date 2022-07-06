import React from "react";
import "./Post.css";


const Post = ({ post: { title, body, imgUrl1, imgUrl2, imgUrl3, imgUrl4, date, id }, index }) => {

    return (  
        <div id={id} className="post-container">
            <h1 className="heading">{title}</h1>
            <h4>{date}</h4>
            <img className="header-img" src={imgUrl1} alt="post" />
            <div className="post-body" dangerouslySetInnerHTML={{ __html: body }}></div>
            <div className="bottom-gallery">
                <img className="gallery-img" src={imgUrl2} alt="post" />
                <img className="gallery-img" src={imgUrl3} alt="post" />
                <img className="gallery-img" src={imgUrl4} alt="post" />
            </div>
        </div>
    );
};
  
export default Post;