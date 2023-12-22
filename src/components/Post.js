import React from 'react';

const Post = ({ title, date, creator, comments, category }) => {
    return (
        <div className="relative bg-black w-[1381px] h-[174px]">
            {/* Add content for each post, using the props */}
            <div className="absolute text-41xl whitespace-pre-wrap inline-block w-[425px] h-[73px]">{title}</div>
            <div className="absolute left-[315px] inline-block w-[79px] h-[39px]">{date}</div>
            <div className="absolute left-[167px] inline-block w-[145px] h-[42px]">{creator}</div>
            <div className="absolute left-[672px] text-center inline-block w-[170px] h-[41px]">{comments}</div>
            <div className="absolute left-[955px] inline-block w-[156px] h-[46px]">{category}</div>

            {/* Explore button */}
            <div className="absolute left-[1226px] rounded-4xs-5 bg-black w-[204px] h-[71px] flex flex-row items-center justify-start p-[25.5px] box-border text-center">
                <div className="relative flex items-center justify-center w-[147px] h-[60px] shrink-0">
                    Explore
                </div>
            </div>
        </div>
    );
};

export default Post;
