import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-link" activeClassName="active-link">Home</NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active-link">Chi Siamo</NavLink>
            <NavLink to="/posts" className="nav-link" activeClassName="active-link">Articoli</NavLink>
        </nav>
    );
}

export default Navbar;