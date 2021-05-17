import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

function AnalysisRequestCard({analysisReq, className, onClick}) {
    const [status, setStatus] = useState()
    const history = useHistory();

    useEffect(() => {
        const statusColor = {
            'in_process': 'bg-yellow-400',
            'complete': 'bg-lime-400',
            'created': 'bg-gray-400',
            'accept': 'bg-yellow-600',
        }
        setStatus(statusColor[analysisReq.status])
    }, [])

    function openAnalysisRequest(id) {
        history.push('/analysis/request/'+id);
    }

    return (
        <div className={className} onClick={() => openAnalysisRequest(analysisReq.id)}>
            <div className="flex py-2 h-full">
                <div className="w-3/4 px-2 py-2">
                    <label className="text-lime-400">#{analysisReq.id}</label>
                    <p className="text-xl text-black">{analysisReq.name}</p>
                    <p className="text-gray-600 truncate">{analysisReq.reason}</p>
                </div>
                <div className='w-1/4 flex justify-center py-5'>
                    <div className={`rounded-full w-10 h-10 ${status}`}/>
                </div>
            </div>
        </div>
    );
}

export default AnalysisRequestCard;