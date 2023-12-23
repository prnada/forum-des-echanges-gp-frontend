import React from 'react';

const Post = ({ title, date, creator, comments, category }) => {
    return (
        <div className="bg-darkGray rounded-lg p-4 my-4 flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex-1">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm">Créateur: {creator} | Date: {date}</p>
            </div>
            <div className="flex-1 text-center md:text-right">
                <p>Réponses: {comments}</p>
                <p>Catégorie: {category}</p>
            </div>
            <button className="bg-lightGray text-darkGray rounded px-4 py-2 mt-2 md:mt-0 md:ml-4">
                Consulter
            </button>
        </div>
    );
};

export default Post;
