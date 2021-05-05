import {$authHost, $authMainHost, $mainHost} from "./index";

export const getAllComments = async () => {
    const { data } = await $authMainHost.get('api/toxicity/comments')
    return data
}