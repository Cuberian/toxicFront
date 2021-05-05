import React, {useEffect, useState} from 'react';
import {getAllUsersVK} from "../../http/usersVkAPI";
import {getAllPosts} from "../../http/postsAPI";
import {getAllComments} from "../../http/commentsAPI";
import {getAllGroups} from "../../http/groupsAPI";
import UserCard from "./UserCard";
import ReactPaginate from 'react-paginate';
import CommentCard from "./CommentCard";
import PostCard from "./PostCard";
import GroupCard from "./GroupCard";

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
        {type: 'posts', name: 'Посты'},
        {type: 'comments', name: 'Комментарии'}
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
                        console.log(type)
                        console.log(data)
                    })
                    break
                case 'posts':
                    getAllPosts().then(data => {
                        setSelectedTypeElements(data)
                        console.log(type)
                        console.log(data)
                    })
                    break
                case 'comments':
                    getAllComments().then(data => {
                        setSelectedTypeElements(data)
                        console.log(type)
                        console.log(data)
                    })
                    break
                case 'groups':
                    getAllGroups().then(data => {
                        setSelectedTypeElements(data)
                        console.log(type)
                        console.log(data)
                    })
                    break
            }
        }
    }

    return (
        <main className="w-full flex flex-col">
            <div className="w-1/2 mx-auto flex justify-center py-5">
                {
                  types.map((item, index) => {
                      return (
                          <button
                              key={'nav_button_'+index}
                              className={`px-10 py-2 rounded-md
                              ${ item.type === selectedType ? 
                                  'bg-lime-600 text-white' :
                                  'hover:bg-lime-600 hover:text-white' }`}
                              onClick={() => changeTypeHandler(item.type)}>
                              {item.name}
                          </button>
                      );
                  })
                }
            </div>
            <div className="w-full flex flex-wrap justify-around px-5">
                {
                    selectedTypeElements.length > 0 && selectedTypeElements
                        .slice(elementsVisited, elementsVisited + elementsPerPage)
                        .map((item, index) => {
                        switch (selectedType) {
                            case 'users':
                                return (<UserCard key={'users_'+index} user={item}/>)
                            case 'comments':
                                return (<CommentCard key={'comments_'+index} comment={item} />)
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
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={pageCount}
                    onPageChange={({selected}) => setPageNumber(selected)}
                    containerClassName="flex space-x-5 items-center w-full justify-center py-10"
                    previousLinkClassName="px-3 py-2 bg-lime-400 text-white hover:bg-lime-600"
                    nextLinkClassName="px-3 py-2 bg-lime-400 text-white hover:bg-lime-600"
                    pageLinkClassName="px-3 py-2 border border-lime-400 hover:bg-lime-600 hover:text-white"
                    activeLinkClassName="bg-lime-600 text-white"
                />
            }
        </main>
    );
}

export default Toxicity;