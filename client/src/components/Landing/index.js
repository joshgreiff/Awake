import React from 'react';
import svg from '../../components/Landing/public/img/third-eye.svg'
import scale from '../../components/Landing/public/img/scale-head.svg'
import gear from '../../components/Landing/public/img/8.svg'
import plant from '../../components/Landing/public/img/plant-head.svg'

export default function Landing() {
    return (
        <>
        <div className="App bg-dark">
        
    
    <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
            <div className="py-1 text-primary-blue font-bold">
                <h1 id="title" className="text-5xl cursor-pointer">AWAKE</h1>
            </div>
            <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-primary-blue uppercase text-m">
                <div onClick={(e) => {e.preventDefault(); window.location.replace('/#features');}}>
                    <span className="cursor-pointer">Features</span>
                </div>
                
                <li className="cursor-pointer">About</li>
                
                <div onClick={(e) => {e.preventDefault(); window.location.replace('/#contact');}}>
                    <li className="cursor-pointer">Contact</li>
                </div>
                
                <div onClick={() => window.open('/Homepage')}>
                    <button type="button" className="btn btn-purple uppercase font-semibold">Launch App</button>
                </div>

            </ul>
            <div className="flex sm:hidden flex-1 justify-end">
                <i className="text-2xl fa-solid fa-bars"></i>
            </div>
        </nav>
    </header>

    
    <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
            
            <div className="flex flex-1 flex-col items-center lg:items-start z-20">
                <h2 className="text-3xl md:text:4 lg:text-5xl text-center lg:text-left mb-6 text-bookmark-white">Create Your Dream Reality</h2>
                <p className="text-lg text-center lg:text-left mb-6 text-bookmark-white">Imagine a world where the only boundaries that exist are those which you create.</p>
                <div className="flex justify-center flex-wrap gap-6">
                    <div onClick={() => window.open("https://discord.gg/3THBrFEq")}>
                        <button type="button" className="btn btn-white font-semibold hover:shadow-inner hover:bg-primary-purple hover:text-white">Join The Community Discord</button> 
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"></img><img src={svg} alt="head"></img> 
            </div>
            
            
            <div className="hidden lg:block overflow-hidden bg-primary-yellow rounded-l-full absolute h-80 w-2/4 top-40 right-0 lg:-bottom-28 lg:-right-26"></div>
        </div>
    </section>

    
    <section className="bg-darkpy-20 mt-20 lg:mt-60">
        
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h2 id="features" className="text-4xl text-center text-primary-blue font-bold">Features</h2>
            <p className="text-center text-gray-600 mt-4 font-bold">
                
            </p>
        </div>
        
        <div className="relative mt-20 lg:mt-24">
            <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
               
                <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0-">
                    <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={scale} alt=""></img>
                </div>
                
                <div className="flex flex-1 flex-col items-center lg:items-start z-10">
                    <h1 className="text-2xl md:text-3xl text-primary-blue">A New Way Of Structuring Goals</h1>
                    <p className="text-gray-300 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">Awake uses gamification to make setting goals interactive and engaging. Complete quests, collect rewards and level up your character by completing tasks.</p>
                </div>
                
            </div>
            
        </div>
        
        <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0-">
                <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={gear} alt=""></img>
            </div> 
            
            <div className="flex flex-1 flex-col items-center lg:items-start">
                <h1 className="text-3xl text-primary-blue">Revolutionary Support</h1>
                <p className="text-gray-300 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">Our responsive Mindset Robot uses positive psychology to reinforce helpful thoughts and assist you in identifying and eliminating limiting beliefs.</p>
            </div>
        </div>
        
        <div className="relative mt-20 lg:mt-24">
            <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                
                <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0-">
                    <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src={plant} alt=""></img>
                </div>
                
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h1 className="text-3xl text-primary-blue">Grow Through Community</h1>
                    <p className="text-gray-300 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">Share progress with friends and build a support system. Awake is predicated on cultivating a sense of community. There is no better way to reach your goals than to surround yourself with people who are committed to building and growing.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="bg-dark py-20">
        <div className="container">
            
            <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h2 className="text-3xl text-center text-primary-blue">Frequently Asked Questions</h2>
                <p className="text-center text-gray-300 mt-4">
                    Here are some of our FAQs. If you have any other questions please feel free to <a className="font-bold underline" href="mailto:josh@greiff.org?">email us</a>. 
                </p>
            </div>
            
            <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto text-bookmark-white">
                <div className="flex items-center border-b py-4">
                    <span className="flex-1">When will the full software be released?</span>
                    <i className="text-primary-purple fa-solid fa-chevron-down"></i>
                </div>
                <div className="flex items-center border-b py-4">
                    <span className="flex-1">How much will it cost?</span>
                    <i className="text-primary-purple fa-solid fa-chevron-down"></i>
                </div>
                <div className="flex items-center border-b py-4">
                    <span className="flex-1">What are your plans for future features?</span>
                    <i className="text-primary-purple fa-solid fa-chevron-down"></i>
                </div>
                <div className="flex items-center border-b py-4">
                    <span className="flex-1">Can anyone use Awake?</span>
                    <i className="text-primary-purple fa-solid fa-chevron-down"></i>
                </div>
                <button type="button" className="flex self-center font-semibold btn btn-purple uppercase mt-12">More Info</button>

            </div> 
        </div>
    </section>

    
    <section className="bg-primary-purple text-white py-20">
        <div className="container">
            <div className="sm:w-3/4 lg:w-2/4 mx-auto">
                <p id="contact" className="font-light uppercase text-center mb-8">Stay up to date</p>
                <h2 className="text-3xl text-center">Enter your email to receive updates</h2>
                <div className="flex flex-col sm:flex-row gap-6 mt-8">
                    <input type="text" placeholder="Enter your email address" className="focus:outline-none flex-1 px-2 py-3 rounded-md text-black"></input>
                    <button type="button" className="btn bg-secondary-turqoise font-semibold hover:bg-white hover:text-black uppercase">Contact Us</button>
                </div>
            </div>
        </div>
    </section>

    
    <footer className="bg-primary-blue py-8">
        <div className="container flex flex-col md:flex-row items-center">
            <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
                <h1 id="title" className="text-bookmark-white text-5xl cursor-pointer">AWAKE</h1>
                <ul className="flex text-white uppercase gap-12 text-xs">
                    <div onClick={(e) => {e.preventDefault(); window.location.replace('/#features');}}>
                        <li className="cursor-pointer">Features</li>
                    </div>
                    <li className="cursor-pointer">About</li>
                    <div onClick={(e) => {e.preventDefault(); window.location.replace('/#contact');}}>
                        <li className="cursor-pointer">Contact</li>
                    </div>
                </ul>
            </div>
            <div className="">
                <ul className="list-none flex gap-10 mt-12 md:mt-0">
                <li >
                    <i className="text-white text-2xl fa-brands fa-twitter"></i>
                </li>
                <li>
                    <i className="text-white text-2xl fa-brands fa-instagram"></i>
                </li>
                </ul>   
            </div>
        </div>
    </footer>
    <script src="./public/index.js"></script>

      </div>
        </>
    )
}