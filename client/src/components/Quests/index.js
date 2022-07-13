import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { QUERY_USERS } from "../../utils/queries"

export default function Quests() {
    return (
        <div className="fixed py-4 px-2 flex items-center justify-center w-screen h-screen">
            <div className="relative box-border h-32 p-4 border-4 ">
                <h1 className="relative text-white text-6xl ">Quest Data Here</h1>
            </div>
        </div>
    )
}