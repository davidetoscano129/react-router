import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Chi Siamo
            </NavLink>
            <NavLink
                to="/posts"
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Articoli
            </NavLink>
        </nav>
    );
}

export default Navbar;