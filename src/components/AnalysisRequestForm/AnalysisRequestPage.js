import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {$authMainHost} from "../../http";
import UserCard from "../Toxicity/UserCard";
import GroupCard from "../Toxicity/GroupCard";
import PostCard from "../Toxicity/PostCard";

function AnalysisRequestPage() {
    const [analysisRequest, setAnalysisRequest] = useState();
    const [analysisResults, setAnalysisResults] = useState([]);
    const { id } = useParams();
    const history = useHistory()

    const reqHelper = {
        'user': 'users_vk',
        'group': 'groups',
        'post': 'posts',
    }


    async function getAnalysisRequest() {
        console.log(id)
        const { data } = await $authMainHost.get('api/toxicity/analysis-request/'+id)


        let results = []
        if(data.analysis_request_objects)
        {
            const objects = Object.values(data.analysis_request_objects)
            const records = Promise.all(objects.map(async (item) => {
                const { data:object } = await $authMainHost.get('api/toxicity/'+ reqHelper[item.type]+'/'+item.object_id);
                return {'type': item.type, 'result_object': object}
            })).then(values => {
                setAnalysisResults(values)
            })
        }

        return {'request': data, results}
    }
    useEffect(() => {
        getAnalysisRequest().then( ({request, results}) => {
            setAnalysisRequest(request)
        })
    }, []);

    return (
        <div className="flex w-full h-full mb-20">
            <div className="flex flex-col container mx-auto px-5 py-4 space-y-4">
                <p className="text-2xl font-bold text-center">Заявка # {analysisRequest && analysisRequest.id}</p>
                <div className="flex flex-col space-y-2">
                    <label className="text-xl font-semibold">Название запроса</label>
                    <p>{analysisRequest && analysisRequest.name}</p>
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="text-xl font-semibold">Обоснование запроса</label>
                    <p className="text-wrap">{analysisRequest && analysisRequest.reason}</p>
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="text-xl font-semibold">Результаты анализа</p>
                    <div className="grid md:grid-cols-4 gap-4 grid-cols-1 py-4">
                        {
                            analysisResults.length && analysisResults.map((item, index) => {
                                switch (item.type)
                                {
                                    case 'user':
                                        return <UserCard user={item.result_object} />
                                    case 'group':
                                        return <GroupCard group={item.result_object} />
                                    case 'post':
                                        return <PostCard post={item.result_object} />
                                }
                            })
                        }
                    </div>
                </div>
                <div>
                    <button className="bg-lime-400 rounded-md py-2 px-3 text-white"
                            onClick={() => history.push('/profile')}>
                        Вернуться в профиль
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AnalysisRequestPage;