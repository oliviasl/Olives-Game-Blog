import React from "react";
import "./Post.css";
import { useParams } from 'react-router-dom'; 
import postData from "../posts.json";
import Post from "./Post.jsx";

const PostDetails =  ({allImages}) => {
    const {postid} = useParams();
    const blogPosts = postData.data;
    const postImages = allImages;

    var postIndex = 0;
    for (let i = 0;i < blogPosts.length; i ++){
        if (blogPosts[i].id === postid) {
            console.log(blogPosts[i]);
            postIndex = i;
        }
    }

    return (
        <div>
            <Post post={blogPosts[postIndex]} postImages={postImages} index={postIndex}></Post>
        </div>
    );
};

export default PostDetails;