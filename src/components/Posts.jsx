import React from "react";
import "./Posts.css";
import Post from "./Post.jsx";
import postsData from "../posts.json";

const Posts = ({allImages}) => {
    const blogPosts = postsData.data;
    const postImages = allImages;

    return (
        <div className="posts-container">
            <h1 className="section-header">Latest Posts</h1>
            {blogPosts.map( (post, index) => (
                <Post key={index} postImages={postImages} post={post} index={index}/>
            ))}
        </div>
    );
};

export default Posts;