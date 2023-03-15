import { Link, useMatch, useResolvedPath } from 'react-router-dom';


import logo from '../../assets/logo/awake.svg';
import Auth from '../../utils/auth'
import coin from '../../assets/coin/A -2.svg'

import { useQuery } from '@apollo/client'

import { QUERY_ME } from '../../utils/queries'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {


    const logout = event => {
        event.preventDefault()
        Auth.logout()
    }
    
    const {loading, data } = useQuery(QUERY_ME)
      
    if(loading){
        return <h3>Loading</h3>
    }

    return (
    <nav className={`nav ${props.navContainerView}`}>
        <div id="icon-container" className="my-auto lg:hidden cursor-pointer" onClick={props.toggleMenu}>
          <FontAwesomeIcon icon={faBars} className={`sm:hidden my-auto ${props.hamburegerView}`} size='xl' id="hamburger-menu"/>
          <FontAwesomeIcon icon={faX} className={`${props.xView} !absolute top-[10px] left-[15px]`} size='xl' id="x-button"/>
        </div>
        

        <Link className='mx-auto sm:ml-[15px] !pr-[50px]' to="/">
            <img className={`Awake ${props.logoView}`} src={logo} alt="React logo"></img> 
        </Link>

        <ul className={`sm:!flex ${props.navView} ${props.animate}`}>

            <CustomLink to="/Dashboard" className={`font text-center`}>Dashboard</CustomLink>
            <CustomLink to="/Social" className={`font text-center`}>Social</CustomLink>
            <CustomLink to="/Communities" className={`font text-center`}>Communities</CustomLink>
            <CustomLink to="/Shop" className={`font text-center`}>Shop</CustomLink>

            {Auth.loggedIn() ? (
            <>
              {/* <Link to ="/profile">Me</Link> */}
              <a href="/" onClick={logout} className="font">
                Logout
              </a>
              <div className='flex align-middle'>
                <img src={coin} width={30} className='bg-nav-grey'/>
                <div className='pt-3 pl-1 text-black bg-nav-grey font'>{data.me.coins}</div>
              </div>
              <div className='flex align-middle'>
                <div className='pt-3 pl-1 text-black bg-nav-grey font'>Level:</div>
                
                <div className='pt-3 pl-1 text-black bg-nav-grey font'>{data.me.level}</div>
              </div> 
            
            </>
            ) : (
            <>  <li className='list-item'>
                  <Link to="/Login" className='font'>Login</Link>
                </li>
                <li>
                  <Link to="/Signup" className='font'>Sign Up</Link>
                </li>
            </>
            )}
        </ul>
        {/* <ul> */}
            
            
        {/* </ul> */}
    </nav>

    )
}

    function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}