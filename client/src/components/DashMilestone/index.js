import React from "react";

const DashMilestone = ({milestones}) => {
    if(!milestones.length) {
        <h4>No Milestones</h4>
    }

    return (
        <div className="milestone-div">
            {milestones && milestones.map(milestone => (
                <div className="milestone">
                    
                <div>
                    <h4>{milestone.milestoneTitle}</h4>
                </div>
                <div>
                    <p>{milestone.milestoneDescription}</p>
                </div>
                </div>
                
            ))}
        </div>
    )
}

export default DashMilestone