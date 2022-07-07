// import react, { useEffect } from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import logo from '../../assets/logo/awake.svg';
// import Homepage from '../../components/Homepage/index';
// import { useState } from 'react';

// useEffect(() => {
//     document.title = capitalizeFirstLetter(currentCategory.name);
// }, [currentCategory]);

// function Nav(props, {handlePageChange, setCurrentPage}) {

//     const {
//         categories = [],
//         setCurrentCategory,
//         contactSelected,
//         currentCategory,
//         setContactSelected,
//       } = props;

// return (
//     <section>
//         <header>
//             <div>
//                 <img src={logo}></img>
//             </div>
//         </header>
//         <nav>
//             <ul className="flex-row">
//                 <li className="mx-2">
//                     <a data-testid="shop" href="#shop" onClick={() => setContactSelected(false)}>
//                         Shop
//                     </a>
//                 </li>
//                 <li className="mx-2">
//                     <a data-testid="home" href="#home" onClick={() => handlePageChange('Home')}>
//                         Home
//                     </a>
//                 </li>
//                 <li className="mx-2">
//                     <a data-testid="quests" href="#quests" onClick={() => setContactSelected(false)}>
//                         Quests
//                     </a>
//                 </li>
//                 <li className="mx-2">
//                     <a data-testid="communities" href="#communities" onClick={() => setContactSelected(false)}>
//                         Communities
//                     </a>
//                 </li>
//             </ul>
//         </nav>
//     </section>
//     )
// }

// export default Nav;

export default function Navbar() {
    return (
    <nav className="nav">
        <a href="/">
            <img src={logo}></img>
        </a>
        <ul>
            <li>
                <a href="/Shop">Shop</a>
            </li>
            <li>
                <a href="/Home">Home</a>
            </li>
            <li>
                <a href="/Check">Check-In</a>
            </li>
            <li>
                <a href="/Quests">Quests</a>
            </li>
            <li>
                <a href="/Communities">Communities</a>
            </li>
        </ul>
    </nav>

    )
}