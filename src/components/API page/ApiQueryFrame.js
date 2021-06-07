import React, {useRef, useState} from 'react';
import ReactJson from 'react-json-view'
import {$authMainHost} from "../../http";

function ApiQueryFrame({contentItem}) {

    const [reqData, setReqData] = useState({vanDarkholm: 'fucking slaves', billyHarington:'Oh, sir, yes, sir!'})

    const inputIdRef = useRef();

    async function sendRequest() {
        let url = process.env.REACT_APP_API_HOST + contentItem.link
        url =  inputIdRef.current ? url + '/' + inputIdRef.current.value : url
        const { data } = await $authMainHost.get(url)
        setReqData(data)
    }

    return (
        <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-5"
             id={contentItem.sectionKey + '_' + contentItem.sectionOrder}>
            <div className="flex flex-col space-y-10 pr-20 lg:w-3/5 w-full">
                <div className="flex items-center space-x-6">
                    <div className="text-2xl font-semibold text-greenspace-400">
                        {contentItem.name}
                    </div>
                    <div className="text-lg font-semibold text-white text-center py-2 px-5 bg-greenspace-400 rounded-md">
                        {contentItem.type}
                    </div>
                </div>
                <div className="text-md font-light">
                    <p className="font-semibold text-lg">{contentItem.description}</p>
                    <p>{contentItem.info}</p>
                    <p>Пример: {contentItem.example}</p>
                </div>
                {
                    contentItem.needIdInput ?
                        <div className="flex">
                            <div className="bg-greenspace-400 text-white p-2 rounded-l-lg">
                                https://toxicity/{contentItem.link}/
                            </div>
                            <input ref={inputIdRef} type="text" className="border-greenspace-400 border-2 focus:outline-none px-2"/>
                            <button
                                className="bg-greenspace-400 hover:bg-greenspace-600 text-white p-2 rounded-r-lg"
                                onClick={() => sendRequest()}>
                                Отправить
                            </button>
                        </div>
                        :
                        <button
                            className="w-1/5 bg-greenspace-400 hover:bg-greenspace-600 text-white p-2 rounded-lg"
                            onClick={() => sendRequest()}>
                            Отправить
                        </button>
                }
            </div>
            <hr className="lg:hidden border border-greenspace-400"/>
            <div className="text-greenspace-400 lg:border-l-2 lg:px-3 border-greenspace-400 lg:w-2/5 w-full">
                <p className="text-2xl font-semibold">Результат</p>
                <ReactJson src={reqData} collapsed={true} collapseStringsAfterLength={30} style={{wordBreak: 'break-word'}}/>
            </div>
        </div>
    );
}

export default ApiQueryFrame;
