import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Chi Siamo</Link></li>
                <li><Link to="/posts">Articoli</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;