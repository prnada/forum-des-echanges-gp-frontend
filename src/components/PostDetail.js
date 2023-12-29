import React, { useState, useEffect } from 'react';

const PostDetail = () => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Use the appropriate postId
                if (response.ok) {
                    const data = await response.json();
                    setPost(data);
                } else {
                    console.error('Failed to fetch post');
                }
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, []);

    return (
        <section className="bg-gray-800 p-4 my-6 shadow-lg w-full">
            {post ? (
                <>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{post.title}</h2>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">[Category : {post.category}]</h4>
                    <article className="bg-gray-700 rounded-lg p-3">
                        {post.body}
                    </article>
                </>
            ) : (
                <p className="text-white">Loading...</p>
            )}
        </section>
    );
};

export default PostDetail;
