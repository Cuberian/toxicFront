import React from 'react';

function CommentCard({comment}) {

    const {author_id, author_type, post_id, text, picture, toxicity} = comment;

    return (
        <div className="border-2 border-lime-400 lg:w-1/4 md:w-1/3 w-full m-3">
            <div className="bg-lime-400 py-3 px-3 w-full text-white">
                {post_id}
            </div>
            <div className="py-2 px-3 border-b-2 border-lime-400 text-lime-400">
                <span>{author_id}, {author_type}</span>
            </div>
            <div className="flex justify-around">
                <div className="w-full py-4 px-3 flex flex-col space-y-3">
                    <p>{text}</p>
                    <p className="text-lg">{toxicity}</p>
                </div>
            </div>
        </div>
    );
}

export default CommentCard;