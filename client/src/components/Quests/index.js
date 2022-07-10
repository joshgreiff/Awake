import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { QUERY_USERS } from "../../utils/queries"

export default function Quests() {
    const { username:userParam } = useParams()
    const { loading, data } = useQuery(QUERY_USERS, {
        variables:{username:userParam}
    })
    const user=data?.user || {}

    if(loading) {
        return <div>loading...</div>
    }
    return (
        <div className="text-white">{user.username}</div>
    )
}