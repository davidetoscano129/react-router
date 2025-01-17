import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function PostDetailPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/posts/${id}`)
            .then((res) => setPost(res.data))
            .catch((err) => console.error('Errore:', err));
    }, [id]);

    if (!post) return <p>Caricamento...</p>;

    const prevId = parseInt(id) - 1;
    const nextId = parseInt(id) + 1;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link to={`/posts/${prevId}`}>Post Precedente</Link>
            <Link to={`/posts/${nextId}`}>Post Successivo</Link>
        </div>
    );
}

export default PostDetailPage;