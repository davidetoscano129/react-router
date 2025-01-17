import '../styles/PostsPage.css';
import React from 'react';
import PostCard from './PostCard';

function PostsPage({ articles, handleDelete }) {
    return (
        <div>
            <h2>Lista degli Articoli</h2>
            <ul>
                {Array.isArray(articles) && articles.length > 0 ? (
                    articles.map((article) => (
                        <li key={article.id}>
                            <PostCard article={article} handleDelete={handleDelete} />
                        </li>
                    ))
                ) : (
                    <p>Nessun articolo disponibile.</p>
                )}
            </ul>
        </div>
    );
}

export default PostsPage;