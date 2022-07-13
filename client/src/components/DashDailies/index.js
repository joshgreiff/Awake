import React from "react";

const DashDailies = ({dailies}) => {
    if(!dailies.length) {
        <h4 className="text-black">No Dailies</h4>
    }

    return (
        <div className="daily-div text-black">
            {dailies && dailies.map(daily => (
                <div className="daily text-black">
                    
                <div>
                    <h4 classname="text-black">{daily.dailyTitle}</h4>
                </div>
                <div>
                    <p>{daily.dailyDescription}</p>
                </div>
                </div>
                
            ))}
        </div>
    )
}

export default DashDailies;