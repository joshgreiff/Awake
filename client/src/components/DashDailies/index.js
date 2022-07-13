import React from "react";

const DashDailies = ({dailies}) => {
    if(!dailies.length) {
        <h4>No Dailies</h4>
    }

    return (
        <div className="daily-div">
            {dailies && dailies.map(daily => (
                <div className="daily">
                    
                <div>
                    <h4>{daily.dailyTitle}</h4>
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