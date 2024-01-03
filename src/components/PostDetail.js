import React, { useState, useEffect } from 'react';

const PostDetail = ({ post }) => {
    // You can still use local state if needed
    // const [post, setPost] = useState(null);

    useEffect(() => {
        // Since the post data is now received as a prop, you can remove the fetch logic
        // Only include local state if you need to manage it within this component

         const fetchPost = async () => {
             try {
                 const response = await fetch(`http://localhost:3001/PostPage/${postId}`);
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
    }, [post]); 

    return (
        <section className="bg-gray-800 p-4 my-6 shadow-lg w-full">
            {post ? (
                <>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{post.titre}</h2>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">[Category: unspecified]</h4>
                    <article className="bg-gray-700 rounded-lg p-3">
                        {post.contenu}
                    </article>
                </>
            ) : (
                <p className="text-white">Loading...</p>
            )}
        </section>
    );
};

export default PostDetail;
