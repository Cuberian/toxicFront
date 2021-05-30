import React, {useEffect, useState} from 'react';
import {getAllUsersVK} from "../../http/usersVkAPI";
import {getAllPosts} from "../../http/postsAPI";
import {getAllGroups} from "../../http/groupsAPI";
import UserCard from "../Cards/UserCard";
import ReactPaginate from 'react-paginate';
import PostCard from "../Cards/PostCard";
import GroupCard from "../Cards/GroupCard";

function Toxicity(props) {

    const [selectedType, setSelectedType] = useState('users')
    const [selectedTypeElements, setSelectedTypeElements] = useState([])

    const [pageNumber, setPageNumber] = useState(0)

    const elementsPerPage = 12
    const elementsVisited = pageNumber * elementsPerPage
    const pageCount = Math.ceil(selectedTypeElements.length / elementsPerPage)


    const types = [
        {type: 'users', name: 'Пользователи'},
        {type: 'groups', name: 'Группы'},
        {type: 'posts', name: 'Посты'}
    ]

    useEffect(() => {
        getAllUsersVK().then(data => {
            setSelectedTypeElements(data)
            console.log(selectedTypeElements)
        })
    }, [])


    function changeTypeHandler(type) {
        if(type !== selectedType)
        {
            setSelectedTypeElements([])
            setPageNumber(0)
            setSelectedType(type)
            switch (type) {
                case 'users':
                    getAllUsersVK().then(data => {
                        setSelectedTypeElements(data)
                    })
                    break
                case 'posts':
                    getAllPosts().then(data => {
                        setSelectedTypeElements(data)
                    })
                    break
                case 'groups':
                    getAllGroups().then(data => {
                        setSelectedTypeElements(data)
                    })
                    break
            }
        }
    }

    return (
        <main className="w-full flex flex-col">
            <div className="w-1/2 mx-auto flex justify-center py-5 space-x-4">
                {
                  types.map((item, index) => {
                      return (
                          <button
                              key={'nav_button_'+index}
                              className={`px-10 py-2 rounded-md
                              ${ item.type === selectedType ? 
                                  'bg-greenspace-400 text-white' :
                                  'hover:bg-greenspace-400 hover:text-white' }`}
                              onClick={() => changeTypeHandler(item.type)}>
                              {item.name}
                          </button>
                      );
                  })
                }
            </div>
            <div className="w-full grid grid-cols-3 gap-4 px-5 auto-rows-max">
                {
                    selectedTypeElements.length > 0 && selectedTypeElements
                        .slice(elementsVisited, elementsVisited + elementsPerPage)
                        .map((item, index) => {
                        switch (selectedType) {
                            case 'users':
                                return (<UserCard key={'users_'+index} user={item}/>)
                            case 'posts':
                                return (<PostCard key={'posts_'+index} post={item} />)
                            case 'groups':
                                return (<GroupCard key={'groups_'+index} group={item} />)
                        }
                    })
                }
            </div>
            {
                selectedTypeElements.length > 0 &&
                <ReactPaginate
                    previousLabel={'Пред'}
                    nextLabel={'След'}
                    pageCount={pageCount}
                    onPageChange={({selected}) => setPageNumber(selected)}
                    containerClassName="flex space-x-5 items-center w-full justify-center py-10"
                    previousLinkClassName="px-3 py-2 bg-greenspace-400 text-white hover:bg-greenspace-600"
                    nextLinkClassName="px-3 py-2 bg-greenspace-400 text-white hover:bg-greenspace-600"
                    pageLinkClassName="px-3 py-2 border border-greenspace-400 hover:bg-greenspace-600 hover:text-white"
                    activeLinkClassName="bg-greenspace-600 text-white"
                />
            }
        </main>
    );
}

export default Toxicity;
