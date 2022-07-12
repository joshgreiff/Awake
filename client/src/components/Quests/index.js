import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { useState } from "react";
import { QUERY_QUESTS } from "../../utils/queries"

export default function Quests() {
    const [param, setParam] = useState()

    const handleChange = (e) => {
        setParam(e.target.value);        
    }

    const handleSubmit = (e) => {
        setParam(e.target.value);
        
        window.location.replace(`/Quests/${param}`)
    }

    const { username: userParam } = useParams()
    const { loading, data } = useQuery(QUERY_QUESTS, {
        variables: { username: userParam }
    })
    const quests = data?.quests || []

    const questList = []

    quests.forEach((quest) => {
        questList.push(
            <ul>
                <li>{quest.questTitle}</li>
                <li>{quest.questDescription}</li>
                <li>{quest.createdAt}</li>
            </ul>

        )        
    })

    if (loading) {
        return <div className="text-white">loading...</div>
    }
    return (
        <>
            <div>
                <input id='questSearch' type="search" placeholder="Enter a username" onChange={handleChange} />
                <button onClick={handleSubmit} className="text-dark rounded-lg bg-white" type="submit">Search Quests</button>
            </div>
            <div className="text-white">
                {questList}
            </div>
        </>
    )
}