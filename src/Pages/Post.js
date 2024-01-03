import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const PostList = () =>
{
    //Traitement dyal les postes (fetch)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("http://localhost:3001/Posts"); 
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data);
                } else {
                    console.error('Failed to fetch posts');
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <Post
                    postId={post._id}
                    title={post.titre}  
                    date={post.date}
                    creator={post.personne}
                    comments='0'
                    category='Unspecified'
                />
            ))}
        </div>
    );
};
export default PostList;

const Post = ({ title, date, creator, comments, category, postId }) => {
    return (
      <div className="bg-white text-gray-800 rounded-lg p-4 my-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm">Creator: {creator} | Date: {date}</p>
        </div>
        <div className="flex-1 text-center md:text-right">
          <p>Comments: {comments}</p>
          <p>Category: {category}</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2 mt-2 md:mt-0 md:ml-4 transition-colors duration-200">
          <Link to={`/PostPage/${postId}`} style={{ color: 'white', textDecoration: 'none' }}>
            View more
          </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2 mt-2 md:mt-0 md:ml-4 transition-colors duration-200">
          <Link to={`/updatePost/${postId}`} style={{ color: 'white', textDecoration: 'none' }}>
            Update
          </Link>
        </button>
      </div>
    );
};