import React from 'react';

function PostCard({post}) {

    const {id, author_id, author_type, text, toxicity} = post;

    return (
        <div className="border-2 border-lime-400  w-full m-3">
            <div className="bg-lime-400 py-3 px-3 w-full text-white">
                {id}
            </div>
            <div className="flex justify-around">
                <div className="w-full py-4 px-3 flex flex-col space-y-3">
                    <p className="truncate">{text}</p>
                    <p className="text-lg">{toxicity}</p>
                </div>
            </div>
        </div>
    );
}

export default PostCard;