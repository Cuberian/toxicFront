import React, {Fragment, useEffect, useState} from 'react';

function ErrorRequestResultLabel({userReqResult, className=''}) {

    const objHelper = {
        'user': 'Пользователь',
        'group': 'Группа',
        'post': 'Пост',
    }
    const { type, object_id, requested_id, analysis_type, result_description } = userReqResult;
    return (
        <div className={className}>
            <div className="border w-full rounded-md shadow-md hover:shadow-lg flex justify-between">
                <div className="flex items-center space-x-4 px-5 py-3">
                    <div className="flex flex-col">
                        <span className="text-sm">{objHelper[type]} {requested_id}</span>
                        <p className="text-md">{result_description}</p>
                    </div>
                </div>
                <div className="flex bg-red-400 items-center px-5 rounded-r-md w-1/6">
                </div>
            </div>
        </div>
    );
}

export default ErrorRequestResultLabel;
