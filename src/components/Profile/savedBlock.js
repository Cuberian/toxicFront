import React, {useContext, useEffect, useRef, useState} from 'react';
import {Disclosure, Transition} from "@headlessui/react";
import UserCard from "../Cards/UserCard";
import ErrorRequestResultLabel from "../Toxicity/ErrorRequestResultLabel";
import GroupCard from "../Cards/GroupCard";
import PostCard from "../Cards/PostCard";
import ReactPaginate from "react-paginate";
import {Context} from "../../index";
import {$authMainHost} from "../../http";
import {observer} from "mobx-react-lite";

const SavedBlock = observer(() => {


    const { user } = useContext(Context)

    const [userSavedRecords, setUserSavedRecords] = useState([]);
    const filterUserSavedRecordsInput = useRef();

    const [pageNumber, setPageNumber] = useState(0)

    const elementsPerPage = 7
    const elementsVisited = pageNumber * elementsPerPage
    const pageCount = Math.ceil(userSavedRecords.length / elementsPerPage)

    useEffect(() => {
        getUserSavedRecords().then(data => {
            console.log(data)
            setUserSavedRecords(data)
        })
    }, [])

    async function getUserSavedRecords() {
        const objHelper = {
            'group': 'groups',
            'user': 'users_vk',
            'post': 'posts'
        }
        const { data } = await $authMainHost.get('api/toxicity/user/saved-records')
        console.log(data)
        let records = []
        for (const item of Object.values(data))
        {
            let obj =  {'type': item.object_type}
            let {data: record} = await $authMainHost.get('api/toxicity/'+objHelper[obj['type']] +'/'+item.object_id)
            obj['record'] = record

            records.push(obj)
        }

        console.log(records)
        return records
    }

    function clearInput(inputRef, func){
        inputRef.current.value = ''
        func()
    }

    function filterSavedRecords() {
        if(filterUserSavedRecordsInput.current.value !== '') {
            const search = filterUserSavedRecordsInput.current.value;
            getUserSavedRecords().then(data => {
                if(data.length > 0) {
                    const result = data.filter( item => {
                        return (item.record.name.includes(search) || item.record.id.toString().includes(search))
                    })
                    setUserSavedRecords(result)
                }
                else {
                    setUserSavedRecords(data)
                }
            })
        }
        else {
            getUserSavedRecords().then(data => {
                setUserSavedRecords(data)
            })
        }
    }

    return (
        <div className="flex flex-col h-full w-full rounded-md shadow-md space-y-4">
            <div className="w-full text-xl font-bold text-center rounded-t-md bg-greenspace-400 py-3 uppercase text-gray-700">
                Закрепленое
            </div>
            <div className="flex space-x-4 px-5">
                <input
                    className="w-full px-2 py-2 rounded-md text-black shadow-md focus:ring-greenspace-400"
                    ref={filterUserSavedRecordsInput}
                    onChange={() => filterSavedRecords()}
                    type="text"/>
                <button
                    className="px-2 py-2 rounded-md bg-greenspace-400 hover:bg-greenspace-600 shadow-md"
                    onClick={() => clearInput(filterUserSavedRecordsInput, filterSavedRecords)}>Сбросить</button>
            </div>
            <hr/>
            <div className="flex flex-grow overflow-hidden px-3">
                    <div className="grid grid-cols-2 gap-4 auto-rows-min">
                    {
                        userSavedRecords.length > 0 && userSavedRecords
                        .slice(elementsVisited, elementsVisited + elementsPerPage)
                        .map((item, index) => {
                                if (item.type === "user")
                                    return <UserCard user={item.record} className=""/>
                                if (item.type === "group")
                                    return <GroupCard group={item.record} className="flex"/>
                                if (item.type === "post")
                                    return <PostCard post={item.record} className=""/>
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
    );
})

export default SavedBlock;
