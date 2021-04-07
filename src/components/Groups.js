import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Group from "./Group"
import {fetchGroups} from "../redux/action";

const Groups = () => {
    const dispatch = useDispatch()
    const groups = useSelector(state => state.groups.fetchedGroups)
    const loading = useSelector(state => state.app.loading)

    if(loading) {
        return <p>WAIT...</p>
    }

    if(!groups.length) {
        return <button className="p-4 bg-blue-400" onClick={() => dispatch(fetchGroups())}>Загрузить</button>
    }
    return groups.map(group => <Group group={group} key={'group_' + group.id}/>)
}



export default Groups