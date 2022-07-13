import React from "react";

const DashUser = ({me}) => {

    return (
        <div className="user-dash-div">
            <div>
                <h3>{me.username}</h3>
            </div>
            <div>
                <p className="text-white">You're currently {me.level}</p>
            </div>
            <div>
                <p className="text-white">You have {me.coins} coins</p>
            </div>
            <div>
                <p className="text-white">You currently have {me.exp} experience points</p>
            </div>
        </div>
    )
}

export default DashUser