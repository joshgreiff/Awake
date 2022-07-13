import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <div className="App">
      </div>
        <div className="w-full h-screen flex items-center justify-center">               
                <div>
                  <Link to="/quests">
                    <button className="relative bg-blue-500 rounded-lg overflow-hidden text-white px-5 py-2.5 group">
                      <span className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-pink-700 left-0 top-0"></span>
                      <span className="relative">Create A Quest</span>
                    </button>
                  </Link>
        </div>
        </div>
    </div>
  )
}
