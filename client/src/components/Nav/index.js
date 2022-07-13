import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../../assets/logo/awake.svg';
import Auth from '../../utils/auth'
import coin from '../../assets/coin/A -2.svg'

import { useQuery } from '@apollo/client'

import { QUERY_ME } from '../../utils/queries'

export default function Navbar() {
    const {loading, data } = useQuery(QUERY_ME)
  
    if(loading){
      return(
        <h1>Loading...</h1>
      )
    }

    const logout = event => {
        event.preventDefault()
        Auth.logout()
    }
    return (
    <nav className="nav">
        <Link to="/">
            <img className="Awake" src={logo} alt="React logo"></img> 
        </Link>
        <ul>
            <CustomLink to="/Shop">Shop</CustomLink>
            <CustomLink to="/Check">Check-in</CustomLink>
            <CustomLink to="/Quests">Quests</CustomLink>
            <CustomLink to="/Communities">Communities</CustomLink>
        </ul>
        <ul>
            
            {Auth.loggedIn() ? (
            <>
              <Link to ="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
              <div className='flex align-middle'>
                <img src={coin} width={30} className='bg-nav-grey'/>
                <div className='pt-3 pl-1 text-black bg-nav-grey'>{data.me.coins}</div>
              </div>
              <div className='flex align-middle'>
                <div className='pt-3 pl-1 text-black bg-nav-grey'>Level:</div>
                
                <div className='pt-3 pl-1 text-black bg-nav-grey'>{data.me.level}</div>
              </div> 
            
            </>
          ) : (
            <>
                <Link to="/Login">Login</Link>
                <Link to="/Signup">Sign Up!</Link>
            </>
          )}
        </ul>
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