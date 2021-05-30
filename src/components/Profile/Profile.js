import React, {useContext, useEffect, useState, useRef} from 'react';
import {Context} from "../../index";
import AnalysisRequestCard from "./AnalysisRequestCard";
import {$authMainHost} from "../../http";
import {useHistory} from "react-router-dom";
import { Disclosure } from '@headlessui/react'
import ReactPaginate from "react-paginate";
import ResultDialog from "../ResultDialog";
import { Transition } from '@headlessui/react';
import UserCard from "../Toxicity/UserCard";
import GroupCard from "../Toxicity/GroupCard";
import PostCard from "../Toxicity/PostCard";
import {observer} from "mobx-react-lite";
import ErrorRequestResultLabel from "../Toxicity/ErrorRequestResultLabel";

const Profile = observer(() => {

    const reqHelper = {
        'user': 'users_vk',
        'group': 'groups',
        'post': 'posts',
    }

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
    const [userRequests, setUserRequests] = useState([]);
    const filterAnalysisCardsInput = useRef();

    const [pageNumber, setPageNumber] = useState(0)

    const elementsPerPage = 7
    const elementsVisited = pageNumber * elementsPerPage
    const pageCount = Math.ceil(userRequests.length / elementsPerPage)

    let [isOpen, setIsOpen] = useState(false)


    function closeModal() {
        setIsOpen(false)
    }

    function openModal(id) {
        setIsOpen(true)
    }

    useEffect(() => {
        getUserAnalysisRequests(user.user.id).then(data => {
            setUserRequests(data)
        })
    }, [])


    function clearInput(inputRef, func){
        inputRef.current.value = ''
        func()
    }

    function filterAnalysisCards() {
        if(filterAnalysisCardsInput.current.value !== '') {
            const search = filterAnalysisCardsInput.current.value;
            getUserAnalysisRequests(user.user.id).then(data => {
                if(data.length > 0) {
                    const result = data.filter( item => {
                        return (item.name.includes(search) || item.id.toString().includes(search))
                    })
                    setUserRequests(result)
                }
                else {
                    setUserRequests(data)
                }
            })
        }
        else {
            getUserAnalysisRequests(user.user.id).then(data => {
                setUserRequests(data)
            })
        }
    }

    async function getUserAnalysisRequests(userId) {
        const {data} = await $authMainHost.get('api/toxicity/analysis-requests/'+ userId)
        console.log(data.analysis_request_objects)
        let result = data.map(item => {
            item.objects = Object.values(item.analysis_request_objects)
            delete item.analysis_request_objects
            return item
        })
        console.log(result)
        return result
    }

    return (
        <>
        <ResultDialog isOpen={isOpen} closeModal={closeModal}/>
        <div className="flex container mx-auto max-h-5/6">
           <div className="min-w-1/3 max-w-1/2 p-5">
               <div className="h-full border border-greenspace-400 py-5 rounded-md shadow-md">
                    <div className="p-5">
                        <img src={user.user.avatar} className="object-cover mx-auto rounded-md h-52 w-52" alt=""/>
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
                <div className="flex flex-col h-full w-full rounded-md shadow-md space-y-4">
                    <div className="w-full text-xl font-bold text-center rounded-t-md bg-greenspace-400 py-3 uppercase text-gray-700">
                        запросы
                    </div>
                    <div className="flex w-full justify-center space-x-4">
                        <button className="px-2 min-w-1/4 py-2 border border-greenspace-400 bg-greenspace-400 rounded-md uppercase">
                            все
                        </button>
                        <button className="px-2 min-w-1/4 py-2 border border-greenspace-400 rounded-md uppercase">
                            закрепленное
                        </button>
                    </div>
                    <div className="flex space-x-4 px-5">
                        <input
                            className="w-full px-2 py-2 rounded-md text-black shadow-md"
                            ref={filterAnalysisCardsInput}
                            onChange={() => filterAnalysisCards()}
                            type="text"/>
                        <button
                            className="px-2 py-2 rounded-md bg-greenspace-400 hover:bg-greenspace-600 shadow-md"
                            onClick={() => clearInput(filterAnalysisCardsInput, filterAnalysisCards)}>Сбросить</button>
                    </div>
                    <hr/>
                    <div className="flex flex-grow h-5/6 overflow-hidden">
                    <div
                        className="w-full h-full px-5 pb-5 space-y-5 px-4 text-gray-700 overflow-y-scroll scrollbar-thumb-greenspace-400 scrollbar-thin">
                        {userRequests.length > 0 && userRequests
                            .slice(elementsVisited, elementsVisited + elementsPerPage)
                            .map((item, index) => {
                                return <Disclosure as="div" key={'request_'+index}>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button
                                                className={`w-full ${open ? 'bg-greenspace-400 rounded-t-md': 'rounded-md'} 
                                    justify-between flex shadow-sm border border-greenspace-400 
                                    hover:shadow-md py-4 px-2 items-center focus:outline-none`}>
                                                <div className="">
                                                    <p className="text-sm text-left">#{item.id}</p>
                                                    <p className="text-xl font-medium">{item.name}</p>
                                                </div>
                                                <div>
                                                    <div className="h-10 w-10 rounded-full bg-lime-400"/>
                                                </div>
                                            </Disclosure.Button>
                                            <Transition
                                                show={open}
                                                enter="transition duration-100 ease-out"
                                                enterFrom="transform scale-95 opacity-0"
                                                enterTo="transform scale-100 opacity-100"
                                                leave="transition duration-75 ease-out"
                                                leaveFrom="transform scale-100 opacity-100"
                                                leaveTo="transform scale-95 opacity-0"
                                            >
                                                <Disclosure.Panel className="">
                                                    <div className="border border-greenspace-400 p-2 rounded-b-md space-y-4">
                                                        <p>Причина: {item.reason}</p>
                                                        <div className="grid grid-cols-2 gap-4">
                                                        {
                                                            item.objects.map(obj => {
                                                                switch (obj.type)
                                                                {
                                                                    case 'user':
                                                                        if (obj.analysis_type === "success")
                                                                            return <UserCard user={obj.object_value} openInfo={openModal}/>
                                                                        else
                                                                            return <ErrorRequestResultLabel userReqResult={obj} />
                                                                    case 'group':
                                                                        if (obj.analysis_type === "success")
                                                                            return <GroupCard group={obj.object_value} openInfo={openModal} className="flex"/>
                                                                    case 'post':
                                                                        return <PostCard post={obj.object_value} openInfo={openModal}/>
                                                                }
                                                            })
                                                        }
                                                        </div>
                                                    </div>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Disclosure>
                            })
                        }
                    </div>
                    </div>
                    <ReactPaginate
                        previousLabel={'Пред'}
                        nextLabel={'След'}
                        pageCount={pageCount}
                        onPageChange={({selected}) => setPageNumber(selected)}
                        containerClassName="flex space-x-5 items-center w-full justify-center py-10 block bottom-0"
                        previousLinkClassName="px-3 py-2 bg-greenspace-400 text-white hover:bg-greenspace-600"
                        nextLinkClassName="px-3 py-2 bg-greenspace-400 text-white hover:bg-greenspace-400"
                        pageLinkClassName="px-3 py-2 border border-greenspace-400 hover:bg-greenspace-600 hover:text-white"
                        activeLinkClassName="bg-greenspace-600 text-white"
                    />
                </div>
            </div>
        </div>
        </>
    );
});

export default Profile;
