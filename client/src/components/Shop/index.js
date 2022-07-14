import React from 'react'
import shop from "../../assets/shop/shop.png"
import sign from "../../assets/shop/shop-sign.png"

export default function Shop() {
    return (   
        <div>
            <div className="App"></div>
            <body className="bg-cover bg-center bg-gradient-to-b from-blue-400">
                <div>
                    <div className="relative py-10">
                        <div className="test h-screen w-full bg-no-repeat relative"
                            style={{
                            backgroundSize: "auto",
                            backgroundAttachment: "relative",
                            backgroundImage: `url(${shop})`,
                            }}>
                        </div>
                    
                    </div>
                </div>
            </body>
        
        </div> 

    )
}