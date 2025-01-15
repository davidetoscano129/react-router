import React from 'react';
import PostCard from './PostCard';

const PostsPage = ({ articles, handleDelete }) => {
    return (
        <div>
            <h1>Lista degli Articoli</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <PostCard article={article} handleDelete={handleDelete} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsPage;