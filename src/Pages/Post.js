import React, { useState, useEffect } from 'react';

const Post = ({ title, date, creator, comments, category }) => {
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
               <a href='/Post'>View more</a>
            </button>
        </div>
    );
};

const PostList = () =>
{
    //Traitement dyal les postes (fetch)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts'); //url 7ta nbdlouha mn ba3d
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
                    key={post.id}
                    title={post.title}
                    date='Just now'
                    creator={post.userId}
                    comments='0'
                    category='Unspecified'
                />
            ))}
        </div>
    );
};

export default PostList;
