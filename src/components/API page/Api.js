import React from 'react';

const Api = () => {

    const apiContent = [
        {section: 'Посты', content: [
                {
                    name: '/post/:id',
                    link: '/post/',
                    type: 'GET',
                    description:'Получить пост из VK по id поста',
                    info: 'id поста может принимать как положительное так и отрицательное значение',
                    example: '-545341231234'
                }
            ]}
    ]

    return (
        <div className="flex w-full h-full">
            <div className="flex flex-col w-1/6 bg-gray-100 h-full shadow-lg">
                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                    <ul className="flex flex-col py-6 space-y-1">
                        <li className="px-5">
                            <div className="flex flex-row items-center h-8">
                                <div className="flex font-medium text-sm my-4 font-sans uppercase">Пользователи</div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-lime-600">
                                <span className="ml-6 font-medium text-sm tracking-wide truncate font-sans">/users/:id</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-lime-600">
                                <span className="ml-6 font-medium text-sm tracking-wide truncate font-sans">/users/:id</span>
                            </a>
                        </li>
                        <li className="px-5">
                            <div className="flex flex-row items-center h-8">
                                <div className="flex font-medium text-sm my-4 font-sans uppercase">Комментарии</div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-lime-600">
                                <span className="ml-6 font-medium text-sm tracking-wide truncate font-sans">/comments/:id</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-lime-600">
                                <span className="ml-6 font-medium text-sm tracking-wide truncate font-sans">/comments/:id</span>
                            </a>
                        </li>
                        <li className="px-5">
                            <div className="flex flex-row items-center h-8">
                                <div className="flex font-medium text-sm my-4 font-sans uppercase">Группы</div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-lime-600">
                                <span className="ml-6 font-medium text-sm tracking-wide truncate font-sans">/groups/:id</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-lime-600">
                                <span className="ml-6 font-medium text-sm tracking-wide truncate font-sans">/groups/:id</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-5/6 flex flex-col items-center space-y-10 md:items-start py-5 px-8">
                {
                    apiContent.map((item, index) => {
                        return (

                        )
                    })
                }
                <div className="flex">
                    <div className="flex flex-col space-y-10 pr-20">
                        <div className="flex items-center space-x-6">
                            <div className="text-2xl font-semibold text-lime-400">
                                /post/:id
                            </div>
                            <div className="text-lg font-semibold text-white text-center py-2 px-5 bg-lime-400 rounded-md">
                                GET
                            </div>
                        </div>
                        <div className="text-md font-light hidden md:block">
                            <p>Получить пост из VK по id поста</p>
                            <p>id поста может принимать как положительное так и отрицательное значение</p>
                            <p>Пример: -545341231234</p>
                        </div>
                        <div className="flex">
                            <div className="bg-lime-400 text-white p-2 rounded-l-lg">https://toxicity/api/post</div>
                            <input type="text" className="border-lime-400 border-2"/>
                            <button className="bg-lime-400 hover:bg-lime-600 text-white p-2 rounded-r-lg">Отправить</button>
                        </div>
                    </div>
                    <div className="text-2xl font-semibold text-lime-400 border-l-2 px-3 border-lime-400">
                        Результат
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col space-y-3 pr-20">
                        <div className="flex items-center space-x-6">
                            <div className="text-2xl font-semibold text-lime-400">
                                /post/:id
                            </div>
                            <div className="text-lg font-semibold text-white text-center py-2 px-5 bg-lime-400 rounded-md">
                                GET
                            </div>
                        </div>
                        <ul className="text-lg font-light hidden md:block">
                            <li>Получить пост из VK по id поста</li>
                            <li>id поста может принимать как положительное так и отрицательное значение</li>
                            <li>Пример: -545341231234</li>
                        </ul>
                        <div className="flex">
                            <div className="bg-lime-400 text-white p-2 rounded-l-lg">https://toxicity/api/post</div>
                            <input type="text" className="border-lime-400 border-2"/>
                            <button className="bg-lime-400 hover:bg-lime-600 text-white p-2 rounded-r-lg">Отправить</button>
                        </div>
                    </div>
                    <div className="text-2xl font-semibold text-lime-400 border-l-2 px-3 border-lime-400">
                        Результат
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col space-y-3 pr-20">
                        <div className="flex items-center space-x-6">
                            <div className="text-2xl font-semibold text-lime-400">
                                /post/:id
                            </div>
                            <div className="text-lg font-semibold text-white text-center py-2 px-5 bg-lime-400 rounded-md">
                                GET
                            </div>
                        </div>
                        <ul className="text-lg font-light hidden md:block">
                            <li>Получить пост из VK по id поста</li>
                            <li>id поста может принимать как положительное так и отрицательное значение</li>
                            <li>Пример: -545341231234</li>
                        </ul>
                        <div className="flex">
                            <div className="bg-lime-400 text-white p-2 rounded-l-lg">https://toxicity/api/post</div>
                            <input type="text" className="border-lime-400 border-2"/>
                            <button className="bg-lime-400 hover:bg-lime-600 text-white p-2 rounded-r-lg">Отправить</button>
                        </div>
                    </div>
                    <div className="text-2xl font-semibold text-lime-400 border-l-2 px-3 border-lime-400">
                        Результат
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col space-y-3 pr-20">
                        <div className="flex items-center space-x-6">
                            <div className="text-2xl font-semibold text-lime-400">
                                /post/:id
                            </div>
                            <div className="text-lg font-semibold text-white text-center py-2 px-5 bg-lime-400 rounded-md">
                                GET
                            </div>
                        </div>
                        <ul className="text-lg font-light hidden md:block">
                            <li>Получить пост из VK по id поста</li>
                            <li>id поста может принимать как положительное так и отрицательное значение</li>
                            <li>Пример: -545341231234</li>
                        </ul>
                        <div className="flex">
                            <div className="bg-lime-400 text-white p-2 rounded-l-lg">https://toxicity/api/post</div>
                            <input type="text" className="border-lime-400 border-2"/>
                            <button className="bg-lime-400 hover:bg-lime-600 text-white p-2 rounded-r-lg">Отправить</button>
                        </div>
                    </div>
                    <div className="text-2xl font-semibold text-lime-400 border-l-2 px-3 border-lime-400">
                        Результат
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Api;