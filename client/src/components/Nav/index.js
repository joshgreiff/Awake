import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../../assets/logo/awake.svg';


export default function Navbar() {
    return (
    <nav className="nav">
        <Link to="/">
            <img src={logo} alt="React logo"></img> 
        </Link>
        <ul>
            <CustomLink to="/Shop">Shop</CustomLink>
            <CustomLink to="/Check">Check-in</CustomLink>
            <CustomLink to="/Quests">Quests</CustomLink>
            <CustomLink to="/Communities">Communities</CustomLink>
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