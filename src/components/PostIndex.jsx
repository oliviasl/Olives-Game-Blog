import React from "react";
import "./PostIndex.css";
import postsData from "../posts.json";

const PostIndex = () => {
    const blogPosts = postsData.data;

    return (
        <div className="index-container">
            {blogPosts.map( (post, index) => (
                <a href={post.href}>
                    <img className="index-img" src={post.indexImg} />
                </a>
            ))}
        </div>
    );
};

export default PostIndex;