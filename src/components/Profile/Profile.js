import React, {useContext, useEffect, useState, useRef} from 'react';
import {Context} from "../../index";
import {$authMainHost} from "../../http";
import { Disclosure } from '@headlessui/react'
import ReactPaginate from "react-paginate";
import { Transition } from '@headlessui/react';
import UserCard from "../Cards/UserCard";
import GroupCard from "../Cards/GroupCard";
import PostCard from "../Cards/PostCard";
import {observer} from "mobx-react-lite";
import ErrorRequestResultLabel from "../Toxicity/ErrorRequestResultLabel";
import RequestBlock from "./requestBlock";
import SavedBlock from "./savedBlock";

const Profile = observer(() => {

    const leftMenu = [
        {
            name: 'запросы',
            label: 'requests'
        },
        {
            name: 'закрепленное',
            label: 'saved'
        },
    ]

    const { user } = useContext(Context)

    const [currentSection, setCurrentSection] = useState('requests')

    return (
        <div className="flex container mx-auto max-h-5/6">
           <div className="min-w-1/3 max-w-1/2 p-5">
               <div className="h-full border border-greenspace-400 py-5 rounded-md shadow-md">
                    <div className="p-5">
                        <img src={user.isAuth && user.user.avatar ? user.user.avatar : '/protection.svg'} className="object-cover mx-auto rounded-md h-52 w-52" alt=""/>
                    </div>
                   <div className="flex flex-col space-y-3 bg-greenspace-400 text-gray-700 p-5">
                       <div>
                           <label className="text-lg">Имя</label>
                           <p className="text-xl font-semibold">{user.user.username}</p>
                       </div>
                       <div>
                           <label className="text-lg">Email</label>
                           <p className="text-xl font-semibold">{user.user.email}</p>
                       </div>
                       <div>
                           <label className="text-lg">Дата регистрации</label>
                           <p className="text-xl font-semibold">{(new Date(user.user.created_at)).toLocaleDateString()}</p>
                       </div>
                   </div>
                   <div className="flex flex-col space-y-3 py-5 text-gray-700">
                       {
                           leftMenu.map((item, index) => {
                               return <button
                                   key={'menu_item_'+index}
                                   className={`w-full px-2 py-3 
                                   ${currentSection === item.label ? 'bg-greenspace-400' : 'bg-gray-100'} 
                                   hover:bg-greenspace-400 uppercase focus:outline-none`}
                                   onClick={() => setCurrentSection(item.label)}>
                                   {item.name}
                               </button>
                           })
                       }
                   </div>
               </div>
           </div>
            <div className="w-full p-5 space-y-4">
                { currentSection === 'requests' && <RequestBlock/>}
                { currentSection === 'saved' && <SavedBlock/>}
            </div>
        </div>
    );
});

export default Profile;
