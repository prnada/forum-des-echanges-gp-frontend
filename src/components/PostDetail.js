import React, { useState, useEffect } from 'react';

const PostDetail = ({ post }) => {
    useEffect(() => {
        fetch('http://localhost:3001/PostPage/${postId}', {
            credentials: 'include'
        }).then(response => response.json())
            .then(data => setPost(data))
            .catch(err => console.log(err));
    }, []);

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
