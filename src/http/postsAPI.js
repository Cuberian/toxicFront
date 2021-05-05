import {$authHost, $authMainHost, $mainHost} from "./index";

export const getAllPosts = async () => {
    const { data } = await $authMainHost.get('api/toxicity/posts')
    return data
}