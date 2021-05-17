import React, {useContext, useEffect, useState, useRef} from 'react';
import {Context} from "../../index";
import AnalysisRequestCard from "./AnalysisRequestCard";
import {$authMainHost} from "../../http";
import {useHistory} from "react-router-dom";

const Profile = () => {
    const { user } = useContext(Context)

    const [userRequests, setUserRequests] = useState([]);
    const filterAnalysisCardsInput = useRef();

    useEffect(() => {
        getUserAnalysisRequests(user.user.id).then(data => {
            setUserRequests(data)
        })
    }, [])


    function clearInput(inputRef, func){
        inputRef.current.value = ''
        func()
    }

    function filterAnalysisCards() {
        if(filterAnalysisCardsInput.current.value !== '') {
            const search = filterAnalysisCardsInput.current.value;
            getUserAnalysisRequests(user.user.id).then(data => {
                if(data.length > 0) {
                    const result = data.filter( item => {
                        return (item.name.includes(search) || item.id.toString().includes(search))
                    })
                    setUserRequests(result)
                }
                else {
                    setUserRequests(data)
                }
            })
        }
        else {
            getUserAnalysisRequests(user.user.id).then(data => {
                setUserRequests(data)
            })
        }
    }

    async function getUserAnalysisRequests(userId) {
        const {data} = await $authMainHost.get('api/toxicity/analysis-requests/'+ userId)
        console.log(data)
        return data
    }

    return (
        <div className="flex container mx-auto">
           <div className="min-w-1/3 max-w-1/2 p-5">
               <div className="bg-lime-400 p-5 rounded-md">
                    <div className="p-5">
                        <img src={user.user.avatar} className="object-cover mx-auto rounded-md" alt=""/>
                    </div>
                   <hr/>
                   <div className="flex flex-col space-y-3 text-white py-5">
                       <div>
                           <label>Имя</label>
                           <p className="font-semibold">{user.user.username}</p>
                       </div>
                       <div>
                           <label>Email</label>
                           <p className="font-semibold">{user.user.email}</p>
                       </div>
                       <div>
                           <label>Дата регистрации</label>
                           <p className="font-semibold">{(new Date(user.user.created_at)).toLocaleDateString()}</p>
                       </div>
                   </div>
               </div>
           </div>
            <div className="flex-grow flex flex-col p-5 space-y-4">
                <div className="bg-lime-400 p-5 rounded-md text-white">
                    <p className="uppercase pb-5">Запросы</p>
                    <hr/>
                    <div className="py-5">
                        <div className="flex space-x-4">
                            <input
                                className="w-full px-2 py-2 rounded-md text-black"
                                ref={filterAnalysisCardsInput}
                                onChange={() => filterAnalysisCards()}
                                type="text"/>
                            <button
                                className="px-2 py-2 bg-blue-300 rounded-md"
                                onClick={() => clearInput(filterAnalysisCardsInput, filterAnalysisCards)}>Сбросить</button>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 grid-cols-1 py-4">
                            {
                                userRequests.length > 0 && userRequests.map((item, index) => {
                                    return <AnalysisRequestCard
                                        key={`analysis_rwq_${index}`}
                                        className="bg-white hover:shadow-md rounded-md"
                                        analysisReq={item}/>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="bg-lime-400 p-5 rounded-md text-white">
                    <p className="uppercase pb-5">Закрепленное</p>
                    <hr/>
                    <div className="py-5">
                        <div className="flex space-x-4">
                            <input className="w-full px-2 py-2 rounded-md text-black" type="text"/>
                            <button className="px-2 py-2 bg-blue-300 rounded-md">Сбросить</button>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;