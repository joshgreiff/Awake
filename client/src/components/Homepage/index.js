import React from 'react'
import { Link } from 'react-router-dom'
import hero from "../../assets/Hero/sunset.png";

export default function Home() {
  return (
    <div>
        <body>               
            <div className="relative flex flex-auto justify-start content-center">
                <div className="test lg:h-screen lg:w-full bg-no-repeat relative"
                        style={{
                        backgroundSize: "auto",
                        backgroundAttachment: "fixed",
                        backgroundImage: `url(${hero})`,
                        }}>
                    <h1 className="relative lg:text-6xl text-white bg-transparent lg:py-2.5">Change the way you think about your goals</h1>
                    <h2 className="relative lg:text-xl text-white bg-transparent lg:py-5.5">Click create a quest below to begin your journey</h2><br />
                    <Link to="/quests">
                        <button className="relative bg-blue-500 rounded-lg overflow-hidden text-white px-5 py-2.5 group">
                            <span className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-pink-600 left-0 top-0"></span>
                            <span className="relative bg-transparent">Create A Quest</span>
                        </button>
                    </Link>
                </div>
            </div>
        </body>
    </div>
  )
}
