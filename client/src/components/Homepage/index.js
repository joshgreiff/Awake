import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="gap-2 bg-dark py-20 px-20">
        <div className="App">
      </div>
        <body className="grid grid-cols-12 grid-rows-12">
        <div>
            <Link to="/quests">
            <button className="border-2 border-white divide-y box-border h-100 w-100 p-2 text-white">Create a Quest!</button>
            </Link>
        </div>
            <div className="text-white font-bold py-4 h-100 w-30 p-5 col-span-12">Active Quests</div>
                <div className="border-2 border-white divide-y box-border h-100 w-100 p-5 col-span-12">
                    <h1 className="text-white box-content h-100 w-100 p-2 font-bold uppercase row-span-12">
                        This is where the active quests will be This is where the active quests will beThis is where the active quests will beThis is where the active quests will beThis is where the active quests will beThis is where the active quests will beThis is where the active quests will beThis is where the active quests will beThis is where the active quests will beThis is where the active quests will beThis is where the active quests will beThis is where the active quests will be

                            <ul className="text-white box-content p-2 lowercase col-span-12">
                                <button>quest 1:</button> <br></br>
                                <button>quest 2:</button> <br></br>
                                <button>quest 3:</button> <br></br>
                                <button>quest 4:</button> <br></br>
                                <button>quest 5:</button>

                            </ul>
                    </h1>
                </div>
        </body>
    </div>
  )
}
