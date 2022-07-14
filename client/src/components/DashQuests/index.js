import React from "react";
import { Link } from 'react-router-dom';

// import DashDailies from "../DashDailies";
// import DashMilestone from "../DashMilestone";

const dashQuests = ({quests, title}) => {
    if(!quests.length) {
        return <h3 className="text-black text-xl lg:py-10">You dont have have any quests yet.</h3>
    }

    return (
        <div>
            <h3 className="font">{title}</h3>
            {quests && quests.map(quest => (
                <div key={quest._id}>
                    <div className="quest-title-dash" >
                        <h3 className="font">{quest.questTitle}</h3>
                    </div>
                    <div className="quest-description-dash">
                        <p className="font">{quest.questDescription}</p>
                    </div>
                    <p className="text-black font">Milestones: {quest.milestones.length}</p>
                    {/* <DashMilestone milestones={quest?.milestones || []} /> */}
                    <p className="font">Daily Quests: {quest.dailies.length}</p>
                    {/* <DashDailies dailies={quest?.dailies || []} /> */}
                </div>
            ))}

        </div>
    )
}   

export default dashQuests;