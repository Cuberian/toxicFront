import React from 'react';
import {useHistory} from "react-router-dom";

function UserCard({user}) {

    const {id, wall_id, fullname, toxicity, avatar} = user;
    const history = useHistory();
    return (
        <div className="border-2 border-lime-400 w-full m-3 hover:shadow-md"
             onClick={() => history.push('/objects/user/' + id)}>
            <div className="bg-lime-400 py-3 px-3 w-full text-white">
                {id}
            </div>
            <div className="flex flex-col py-2 px-3 border-b-2 border-lime-400 text-lime-400">
                <span className="text-sm">{wall_id}</span>
                <span>{fullname}</span>
            </div>
            <div className="flex justify-around">
                <span className="py-2 text-lg">{toxicity}</span>
                <div className="h-10 w-10 rounded-full bg-lime-400 transform -translate-y-6">
                    <img src={avatar} alt="" className="h-10 w-10 rounded-full"/>
                </div>
            </div>
        </div>
    );
}

export default UserCard;