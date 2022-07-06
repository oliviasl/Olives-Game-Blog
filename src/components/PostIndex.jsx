import React from "react";
import "./PostIndex.css";
import postsData from "../posts.json";

const PostIndex = () => {
    const blogPosts = postsData.data;

    return (
        <div>
            <h1 className="section-header">Post Index</h1>

            <div className="index-container">

                {blogPosts.map( (post, index) => (
                    <a key={index} href={"/post-details/" + post.id} >
                        <img className="index-img" src={post.indexImg} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default PostIndex;