import React from 'react';
import {observer} from "mobx-react-lite";

const Main = observer((props) => {
    return (
        <div className="w-full">
            <div className="bg-gray-100 w-full flex justify-center">
                <div className="w-1/2 flex flex-col py-20 space-y-10">
                    <p className="font-bold text-4xl text-center">Уровень токсичности</p>
                    <p className="text-lg text-center leading-loose">
                        Цифра, отражающая наскольоко та или иная сущность токсична,
                        где 0% - абсолютно не токсично, а 100% - полностью токсично
                    </p>
                    <button className="bg-greenspace-400 text-lg hover:bg-lime-600 py-3 lg:w-1/6 w-1/2 mx-auto text-white">
                        Анализ
                    </button>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-1/3 flex flex-col py-10 space-y-10">
                    <p className="font-bold text-3xl text-center">О токсичности</p>
                    <p className="text-lg text-center leading-loose">
                        Токсичность — это любое негативное поведение одного человека по отношению к другому человеку
                        или группе людей. Проявляется чаще всего в социальных сетях по средством нецензурногого,
                        неготивного общения и создания соответсвующего материала.
                    </p>
                </div>
            </div>

            <div className="bg-greenspace-400 w-full flex justify-center">
                <div className="flex lg:flex-row flex-col justify-center flex-wrap py-10 px-5 lg:space-x-10 space-y-5 lg:space-y-0">
                    <div className="flex items-center py-4 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white lg:h-14 lg:w-14 w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                        <div className="flex flex-col text-white font-medium whitespace-nowrap">
                            <span className="text-xl">более 60%</span>
                            <span>сообщений токсичны</span>
                        </div>
                    </div>
                    <div className="flex items-center py-4 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white lg:h-14 lg:w-14 w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                        <div className="flex flex-col text-white font-medium whitespace-nowrap">
                            <span className="text-xl">более 55%</span>
                            <span>хотя бы раз публиковали пост</span>
                            <span>с токсичностью выше 50%</span>
                        </div>
                    </div>
                    <div className="flex items-center py-4 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white lg:h-14 lg:w-14 w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                        <div className="flex flex-col text-white font-medium whitespace-nowrap">
                            <span className="text-xl">42%</span>
                            <span>средний процент</span>
                            <span>токсичности</span>
                        </div>
                    </div>
                    <div className="flex items-center py-4 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white lg:h-14 lg:w-14 w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                        <div className="flex flex-col text-white font-medium whitespace-nowrap ">
                            <span className="text-xl">более 20%</span>
                            <span>публикуемых материалов ежидневно</span>
                            <span>имеют высокую токсичность</span>
                        </div>
                    </div>
                    <div className="flex items-center py-4 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white lg:h-14 lg:w-14 w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                        <div className="flex flex-col text-white font-medium whitespace-nowrap">
                            <span className="text-xl">менее 15%</span>
                            <span>пользователей имеют токсичность</span>
                            <span>ниже 20%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Main;
