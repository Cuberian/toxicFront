import {$authHost, $authMainHost, $mainHost} from "./index";

export const getAllGroups = async () => {
    const { data } = await $authMainHost.get('api/toxicity/groups')
    return data
}