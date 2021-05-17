import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {$authMainHost} from "../../http";
import PostCard from "../Toxicity/PostCard";

function UserVkPage(props) {

    const { id } = useParams()
    const [userVK, setUserVK] = useState()
    const [userPosts, setUserPosts] = useState()

    async function getUser() {
        const { data } = await $authMainHost.get('api/toxicity/users_vk/'+id)
        const {data:posts} = await $authMainHost.get('api/toxicity/users_vk/'+id +'/posts')

        console.log(data)
        setUserVK(data)
        setUserPosts(posts)
    }

    useEffect(() => {
        getUser();
    }, [])


    return (
        <div className="flex w-full h-full mb-20">
            {userVK &&
            <div className="flex mx-auto container px-5 py-4 space-x-4">
                <aside className="h-screen sticky top-0">
                    <div className="sticky top-10 flex flex-col rounded-md bg-lime-400 space-y-3 p-5 shadow-md">
                        <div>
                            <img src={userVK.avatar} alt=""/>
                        </div>
                        <hr/>
                        <div className="flex flex-col space-y-4 text-white">
                            <div className="flex flex-col">
                                <label className="font-semibold text-lg">Имя</label>
                                <p>{userVK.fullname}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-lg">ID стены</label>
                                <p>{userVK.wall_id}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-lg">Закрытый профиль</label>
                                <p>{userVK.is_closed ? 'Да' : 'Нет'}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-lg">Токсичность</label>
                                <p>{userVK.toxicity}</p>
                            </div>
                        </div>
                    </div>
                </aside>

                <main className="flex flex-col flex-grow">
                    <div className="flex flex-col shadow-md p-5">
                        <p className="text-lg font-semibold">Посты</p>
                        <hr/>
                        <div className="grid md:grid-cols-4 gap-4 grid-cols-1 py-4">
                            {
                                userPosts && userPosts.map( item => {
                                    return <PostCard post={item}/>
                                })
                            }
                        </div>
                    </div>
                </main>
            </div>
            }
        </div>
    );
}

export default UserVkPage;