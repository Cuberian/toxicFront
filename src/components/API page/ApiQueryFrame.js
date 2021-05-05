import React from 'react';
import ReactJson from 'react-json-view'

function ApiQueryFrame({contentItem}) {
    return (
        <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-5"
             id={contentItem.sectionKey + '_' + contentItem.sectionOrder}>
            <div className="flex flex-col space-y-10 pr-20">
                <div className="flex items-center space-x-6">
                    <div className="text-2xl font-semibold text-lime-400">
                        {contentItem.name}
                    </div>
                    <div className="text-lg font-semibold text-white text-center py-2 px-5 bg-lime-400 rounded-md">
                        {contentItem.type}
                    </div>
                </div>
                <div className="text-md font-light">
                    <p className="font-semibold text-lg">{contentItem.description}</p>
                    <p>{contentItem.info}</p>
                    <p>Пример: {contentItem.example}</p>
                </div>
                <div className="flex">
                    <div className="bg-lime-400 text-white p-2 rounded-l-lg">
                        https://toxicity/api/{contentItem.link}
                    </div>
                    <input type="text" className="border-lime-400 border-2 focus:outline-none px-2"/>
                    <button className="bg-lime-400 hover:bg-lime-600 text-white p-2 rounded-r-lg">
                        Отправить
                    </button>
                </div>
            </div>
            <div className="text-lime-400 lg:border-l-2 px-3 border-lime-400">
                <p className="text-2xl font-semibold">Результат</p>
                <ReactJson src={{vanDarkholm: 'fucking slaves', billyHarington:'Oh, sir, yes, sir!'}}/>
            </div>
        </div>
    );
}

export default ApiQueryFrame;