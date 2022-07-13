import React from "react";
import { Link } from 'react-router-dom';

import DashDailies from "../DashDailies";
import DashMilestone from "../DashMilestone";

const dashQuests = ({quests, milestones, dailies, title}) => {
    if(!quests.length) {
        return <h3 className="text-black">You dont have have any quests yet.</h3>
    }

    return (
        <div>
            <h3>{title}</h3>
            {quests && quests.map(quest => (
                <div key={quest._id}>
                    <div className="quest-title-dash" >
                        <h3>{quest.questTitle}</h3>
                    </div>
                    <div className="quest-description-dash">
                        <p>{quest.questDescription}</p>
                    </div>
                    <p className="text-black">Milestones:</p>
                    <DashMilestone milestones={milestones} />
                    <p>Daily Quests:</p>
                    <DashDailies dailies={dailies} />
                </div>
            ))}

        </div>
    )
}   

export default dashQuests;