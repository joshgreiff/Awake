import React from "react";

const DashUser = ({me}) => {

    return (
        <div className="user-dash-div">
            <div>
                <h3>{me.username}</h3>
            </div>
            <div>
                <p>You're currently level {me.level}</p>
            </div>
            <div>
                <p>You have {me.coins} coins</p>
            </div>
            <div>
                <p>You currently have {me.exp} experience points</p>
            </div>
        </div>
    )
}

export default DashUser