import '../styles/PostCard.css';
import { Link } from 'react-router-dom';

function PostCard({ article, handleDelete }) {
    return (
        <div className="post-card">
            <h3>
                <Link to={`/posts/${article.id}`}>{article.title}</Link>
            </h3>
            <p>{article.content}</p>
            <button onClick={() => handleDelete(article.id)}>Elimina</button>
        </div>
    );
}

export default PostCard;