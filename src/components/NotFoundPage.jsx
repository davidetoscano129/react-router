import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div>
            <h2>404 - Pagina non trovata</h2>
            <Link to="/">Torna alla Home</Link>
        </div>
    );
}

export default NotFoundPage;