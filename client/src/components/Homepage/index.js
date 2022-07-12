import React from 'react'
import { Link } from 'react-router-dom'
import hero from "../../assets/hero/sunset.png";

export default function Home() {
  return (
    <div>
        <div className="App">
      </div>
        <body>               
            <div>
                <div className="relative">
                    <div className="test h-screen w-full bg-no-repeat relative"
                            style={{
                            backgroundSize: "auto",
                            backgroundAttachment: "fixed",
                            backgroundImage: `url(${hero})`,
                            }}>
                        <h1 className="relative text-6xl text-white xl:bg-transparent py-2.5">Change the way you think about your goals</h1>
                        <h2 className="relative text-xl text-white xl:bg-transparent py-5.5">Click create a quest below to begin your journey</h2><br />
                        <Link to="/quests">
                            <button className="relative bg-blue-500 rounded-lg overflow-hidden text-white px-5 py-2.5 group">
                                <span className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-pink-700 left-0 top-0"></span>
                                <span className="relative xl:bg-transparent">Create A Quest</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </body>
    </div>
  )
}
