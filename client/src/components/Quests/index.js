import { useParams } from "react-router-dom"
import { useQuery } from "@pollo/client"
import { QUERY_USERS } from "../../utils/queries"

export default function Quests() {
    const { loading, data } = useQuery(QUERY_USERS)
    return (
        <div className="text-white">TEST</div>
    )
}