import React from "react";
import "./Posts.css";
import Post from "./Post.jsx";
import postsData from "../posts.json";

const Posts = () => {
    const blogPosts = postsData.data;

    return (
        <div className="posts-container">
            {blogPosts.map( (post, index) => (
                <Post key={index} post={post} index={index}/>
            ))}
        </div>
    );
};

export default Posts;