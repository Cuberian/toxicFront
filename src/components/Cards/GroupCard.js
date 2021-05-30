import React, {Fragment, useEffect, useState} from 'react';
import { Dialog, Transition } from '@headlessui/react'
import {useHistory} from "react-router-dom";
import {$authMainHost} from "../../http";

function GroupCard({group, className=''}) {

    const {id, wall_id, name, screen_name, info, is_closed, toxicity, avatar} = group;
    let [isOpen, setIsOpen] = useState(false)
    const [groupPosts, setGroupPosts] = useState([])

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        getGroupPosts().then(r => {
            setIsOpen(true)
        })
    }
    async function getGroupPosts() {
        const {data:posts} = await $authMainHost.get('api/toxicity/groups/'+id +'/posts')

        setGroupPosts(posts)
    }

    useEffect(() => {
        getGroupPosts()
    }, [])

    return (
        <>
            <div className={className} onClick={() => openModal(true)}>
                <div className=" w-full rounded-md shadow-md hover:shadow-lg flex justify-between">
                    <div className="flex items-center space-x-4 px-5 py-3">
                        <div className="w-2/6">
                            <img src={avatar} alt="" className="h-10 w-10 rounded-md"/>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm">{wall_id}</span>
                            <p className="text-md">{name}</p>
                        </div>
                    </div>
                    <div className="flex bg-greenspace-400 items-center px-5 rounded-r-md min-w-1/4">
                        <span className="mx-auto text-xl">{Math.round(toxicity * 100)}%</span>
                    </div>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="h-5/6 px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-69"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-70"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
              &#8203;
            </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-4/5 p-6 my-8 h-full text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <div className="flex h-5/6">
                                    <div className="h-full w-2/6">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-2xl font-medium leading-6 text-gray-900"
                                        >
                                            Группа #{id}
                                        </Dialog.Title>
                                        <div className="flex flex-col space-y-5 mt-4 p-5 rounded-md justify-start">
                                        <div className="flex flex-col space-y-3 h-full items-center">
                                            <img src={avatar} alt="" className="h-32 w-32 rounded-md"/>
                                            <div className="flex w-full">
                                                <span
                                                    className="p-4 border border-greenspace-400 rounded-md
                                                    w-full text-center text-lg shadow-md">
                                                    {Math.round(toxicity * 100)}%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex h-full flex-col space-y-3 p-4 border bg-greenspace-400 rounded-md shadow-md">
                                            <div>
                                                <span className="text-gray-700 font-medium">Полное название группы:</span>
                                                <p className="text-sm text-gray-700">
                                                    {name}
                                                </p>
                                            </div>
                                            <div>
                                                <span className="text-gray-700 font-medium">Wall id:</span>
                                                <p className="text-sm text-gray-700">
                                                    {wall_id}
                                                </p>
                                            </div>
                                            <div>
                                                <span className="text-gray-700 font-medium">Закрытая группа:</span>
                                                <p className="text-sm text-gray-700">
                                                    {is_closed ? 'Да' : 'Нет'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                    onClick={closeModal}
                                                >
                                                    Закрыть
                                                </button>
                                            </div>
                                    </div>
                                    </div>
                                    <div className="h-full w-4/6">
                                        <p className="text-lg font-medium mt-3">Посты: </p>
                                        <div className="mt-4 px-5 overflow-y-scroll h-full scrollbar scrollbar-thumb-greenspace-400">
                                        <div className="flex flex-col space-y-4">
                                            {groupPosts.length && groupPosts.map(item => {
                                                return <div className="p-4 border shadow-md rounded-md">
                                                    <p>{ item.text }</p>
                                                    <p>{Math.round(item.toxicity * 100)}%</p>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default GroupCard;
