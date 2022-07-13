import React from "react";

const DashUser = ({me}) => {

    return (
        <div className="user-dash-div">
            <div>
                <h3>{me.username}</h3>
            </div>
            <div>
<<<<<<< HEAD
                <p className="text-white">You're currently {me.level}</p>
=======
                <p>You're currently level {me.level}</p>
>>>>>>> a29694d57dc9d5ecd7e2c0ece938215a52eee1ef
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