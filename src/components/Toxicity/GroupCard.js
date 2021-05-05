import React from 'react';

function GroupCard({group}) {

    const {info, toxicity, avatar, name, wall_id} = group;

    return (
        <div className="border-2 border-lime-400 lg:w-1/4 md:w-1/3 w-full m-3">
            <div className="bg-lime-400 py-3 px-3 w-full text-white">
                {wall_id}
            </div>
            <div className="py-2 px-3 border-b-2 border-lime-400 text-lime-400">
                <span>{name}</span>
            </div>
            <div className="flex justify-around">
                <div className="w-3/4 py-4 px-3 flex flex-col space-y-3">
                    <p>{info}</p>
                    <p className="text-lg">{toxicity}</p>
                </div>
                <div className="w-1/4">
                    <div className="h-10 w-10 rounded-full bg-lime-400 transform -translate-y-6">
                        <img src={avatar} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroupCard;