import React from "react";
import "./PostIndex.css";
import postsData from "../posts.json";

const PostIndex = ({allImages}) => {
    const blogPosts = postsData.data;
    const postImages = allImages;

    return (
        <div>
            <h1 className="section-header">Post Index</h1>

            <div className="index-container">

                {blogPosts.map( (post, index) => (
                    <a key={index} href={"/post-details/" + post.id} >
                        <img className="index-img" src={postImages[post.id + post.indexImg]} alt="post index"/>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default PostIndex;