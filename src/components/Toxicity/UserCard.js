import React from 'react';

function UserCard({user}) {

    const {id, fullname, toxicity, avatar} = user;

    return (
        <div className="border-2 border-lime-400 lg:w-1/4 md:w-1/3 w-full m-3">
            <div className="bg-lime-400 py-3 px-3 w-full text-white">
                {id}
            </div>
            <div className="py-2 px-3 border-b-2 border-lime-400 text-lime-400">
                <span>{fullname}</span>
            </div>
            <div className="flex justify-around">
                <span className="py-2 text-lg">{toxicity}</span>
                <div className="h-10 w-10 rounded-full bg-lime-400 transform -translate-y-6">
                    <img src={avatar} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default UserCard;