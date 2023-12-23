import React from 'react';
import Header2 from '../components/Header2';
import Footer2 from '../components/Footer2';

const PostPage = () => {
    // Dummy data for comments
    const comments = [
        {
            id: 1,
            author: 'snowleopard',
            content: 'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.',
            time: '1 month ago',
            profilePic: '/ellipse-36@2x.png'
        },
        // ... other comments
    ];

    return (
        <div className="bg-gray-900 text-gray-300 flex flex-col w-full">
            <Header2 />
            <main className="w-full p-4 flex-grow">
                <section className="bg-gray-800 p-4 my-6 shadow-lg w-full">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Post title</h2>
                    <article className="bg-gray-700 rounded-lg p-3">
                        Post Content
                    </article>
                </section>
                <section className="mb-6 w-full">
                    <textarea
                        className="w-full bg-gray-800 rounded-lg p-3 text-gray-300 leading-normal resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                        rows="4"
                        placeholder="Write your comment"
                    ></textarea>
                    <button className="bg-red-600 hover:bg-red-700 text-black font-bold py-2 px-4 rounded-lg float-right my-2 transition-colors duration-150">
                        Send
                    </button>
                </section>
                <section className="bg-gray-800 py-4 w-full">
                    <h3 className="text-xl md:text-2xl text-white my-4">Comments</h3>
                    {comments.map((comment) => (
                        <div key={comment.id} className="bg-gray-700 my-4 p-4 rounded-lg shadow flex w-full">
                            <img
                                src={comment.profilePic || 'default_profile_pic_placeholder.png'} // Use a default placeholder if no profilePic is provided
                                alt="Profile"
                                className="rounded-full h-12 w-12 mr-4" // Adjust size as needed
                            />
                            <div className="flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <h4 className="font-bold text-lg text-red-500">{comment.author}</h4>
                                        <p className="text-gray-500 text-sm">{comment.time}</p>
                                    </div>
                                </div>
                                <p className="whitespace-pre-wrap text-gray-300">{comment.content}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <br></br><br></br><br></br><br></br>
            <Footer2 />
        </div>
    );
};

export default PostPage;
