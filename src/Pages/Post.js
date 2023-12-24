import React from 'react';

const Post = ({ title, date, creator, comments, category }) => {
    return (
        // Use colors that match the rest of the layout. Assuming a light theme.
        <div className="bg-white text-gray-800 rounded-lg p-4 my-4 flex flex-col md:flex-row justify-between items-center">
            <div className="flex-1">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm">Creator: {creator} | Date: {date}</p>
            </div>
            <div className="flex-1 text-center md:text-right">
                <p>Comments: {comments}</p>
                <p>Category: {category}</p>
            </div>
            {/* Adjust the button to fit the general layout color scheme */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2 mt-2 md:mt-0 md:ml-4 transition-colors duration-200">
                View
            </button>
        </div>
    );
};

export default Post;
