import {$authHost, $authMainHost, $mainHost} from "./index";

export const getAllUsersVK = async () => {
    const { data } = await $authMainHost.get('api/toxicity/users_vk')
    return data
}