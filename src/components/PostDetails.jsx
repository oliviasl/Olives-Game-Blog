import React from "react";
import "./Post.css";
import { useParams } from 'react-router-dom'; 
import postData from "../posts.json";
import Post from "./Post.jsx";

const PostDetails =  () => {
    const {postid} = useParams();
    const blogPosts = postData.data;

    var postIndex = 0;
    for (let i = 0;i < 2; i ++){
        if (blogPosts[i].id == postid) {
            postIndex = i;
        }
    }

    return (
        <div>
            <Post post={blogPosts[postIndex]} index={postIndex}></Post>
        </div>
    );
};

export default PostDetails;