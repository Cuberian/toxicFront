import React from 'react';
import ApiQueryFrame from "./ApiQueryFrame";
import {Link} from "react-scroll";

const Api = () => {

    const apiContent = [
        {section: 'Группы', sectionKey:'groups', content: [
                {
                    name: '/groups',
                    link: 'api/toxicity/groups',
                    type: 'get',
                    description:'Получить все проанализированные группы из вк',
                    needIdInput: false
                },
                {
                    name: '/groups/:id',
                    link: 'api/toxicity/groups',
                    type: 'get',
                    description:'Получить группу из VK по id группы',
                    info: 'id группы может принимать как положительное так и отрицательное значение',
                    example: '-545341231234',
                    needIdInput: true
                }
            ]
        },
        {section: 'Пользователи', sectionKey:'users', content: [
                {
                    name: '/users_vk',
                    link: 'api/toxicity/users_vk',
                    type: 'get',
                    description:'Получить всех проанализированных пользователей из вк',
                    needIdInput: false
                },
                {
                    name: '/users_vk/:id',
                    link: 'api/toxicity/users_vk',
                    type: 'get',
                    description:'Получить пользователя из VK по id пользователя',
                    info: 'id пользователя может принимать как положительное так и отрицательное значение',
                    example: '-545341231234',
                    needIdInput: true
                }
            ]
        },
        {section: 'Посты', sectionKey:'posts', content: [
                {
                    name: '/post',
                    link: 'api/toxicity/posts',
                    type: 'get',
                    description:'Получить получить все проанализированные посты из вк',
                    needIdInput: false
                },
                {
                    name: '/post/:id',
                    link: 'api/toxicity/posts',
                    type: 'get',
                    description:'Получить пост из VK по id поста',
                    info: 'id поста может принимать как положительное так и отрицательное значение',
                    example: '-545341231234',
                    needIdInput: true
                }
            ]
        }
    ];

    return (
        <div className="flex w-full h-full">
            <div className="bg-gray-600 text-white h-screen sticky top-0 flex-grow">
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
                                                           activeClass="bg-greenspace-600"
                                                           spy={true}
                                                           offset={-50}
                                                           key={'section_'+index+'_'+itemIndex}
                                                           className="px-10 flex items-center py-3 focus:outline-none hover:bg-greenspace-600">
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
                            <div key={`section_${item.section}`} className="w-full">
                                <div className="bg-greenspace-400 text-2xl uppercase py-4 px-4 text-white">
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
