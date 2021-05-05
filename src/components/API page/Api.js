import React from 'react';
import ApiQueryFrame from "./ApiQueryFrame";
import {Link} from "react-scroll";

const Api = () => {

    const scrollTo = (el) => {
        el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    const apiContent = [
        {section: 'Посты', sectionKey:'posts', content: [
                {
                    name: '/post/:id',
                    link: 'post/',
                    type: 'GET',
                    description:'Получить пост из VK по id поста',
                    info: 'id поста может принимать как положительное так и отрицательное значение',
                    example: '-545341231234'
                },
                {
                    name: '/post/:id',
                    link: 'post/',
                    type: 'GET',
                    description:'Получить пост из VK по id поста',
                    info: 'id поста может принимать как положительное так и отрицательное значение',
                    example: '-545341231234'
                },
                {
                    name: '/post/:id',
                    link: 'post/',
                    type: 'GET',
                    description:'Получить пост из VK по id поста',
                    info: 'id поста может принимать как положительное так и отрицательное значение',
                    example: '-545341231234'
                }
            ]
        },
        {section: 'Комментарии', sectionKey:'comments', content: [
                {
                    name: '/comment/:id',
                    link: 'post/',
                    type: 'GET',
                    description:'Получить пост из VK по id поста',
                    info: 'id поста может принимать как положительное так и отрицательное значение',
                    example: '-545341231234'
                },
                {
                    name: '/comment/:id',
                    link: 'post/',
                    type: 'GET',
                    description:'Получить пост из VK по id поста',
                    info: 'id поста может принимать как положительное так и отрицательное значение',
                    example: '-545341231234'
                },
                {
                    name: '/comment/:id',
                    link: 'post/',
                    type: 'GET',
                    description:'Получить пост из VK по id поста',
                    info: 'id поста может принимать как положительное так и отрицательное значение',
                    example: '-545341231234'
                }
            ]
        }
    ];

    return (
        <div className="flex w-full h-full">
            <div className="bg-gray-100 h-screen sticky top-0 flex-grow">
                    <div className="flex flex-col py-6 space-y-1">
                        {
                            apiContent.map((item, index) => {
                                return (
                                    <div className="" key={'section_'+index}>
                                        <div className="px-5 py-3 flex font-medium text-sm font-sans uppercase">{item.section}</div>
                                            {
                                                item.content.map((contentItem, itemIndex) => {
                                                    return (
                                                        <Link
                                                           to={item.sectionKey+ '_' + itemIndex}
                                                           smooth={true}
                                                           duration={1000}
                                                           activeClass="bg-lime-600"
                                                           spy={true}
                                                           offset={-50}
                                                           key={'section_'+index+'_'+itemIndex}
                                                           className="px-10 flex items-center py-3 focus:outline-none hover:bg-lime-600">
                                                            <span
                                                                className="font-medium text-sm tracking-wide truncate font-sans">
                                                                {contentItem.name}
                                                            </span>
                                                        </Link>
                                                    )
                                                })
                                            }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            <div className="w-5/6 flex flex-col items-center space-y-10 md:items-start pb-20">
                {
                    apiContent.map((item, index) => {
                        return (
                            <div className="w-full">
                                <div className="bg-lime-400 text-2xl uppercase py-4 px-4 text-white">
                                    {item.section}
                                </div>
                                <div className="py-5 px-8 space-y-20">
                                {
                                    item.content.map((contentItem, contentItemIndex) => {
                                    return ( <ApiQueryFrame key={'api__f_'+ index + '_' + contentItemIndex}
                                                            contentItem={{...contentItem, sectionKey: item.sectionKey, sectionOrder: contentItemIndex}}/> )
                                    })
                                }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Api;