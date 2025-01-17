import './styles/App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Layout from './components/Layout';
import PostCard from './components/PostCard';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import PostsPage from './components/PostsPage';

function App() {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    content: '',
    category: 'Tech',
    isPublished: false,
    tags: [],
  });

  const [filterTag, setFilterTag] = useState('');
  const [articles, setArticles] = useState([]);

  // Fetch iniziale degli articoli al caricamento del componente
  useEffect(() => {
    axios.get('http://localhost:3001/api/posts')
      .then((res) => {
        console.log('Dati ricevuti:', res.data);
        if (Array.isArray(res.data)) {
          setArticles(res.data);
        } else {
          console.error('La risposta non è un array:', res.data);
        }
      })
      .catch((err) => console.error('Errore nel fetch degli articoli:', err));
  }, []);

  // Gestione invio del form (POST)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.title.trim() !== '') {
      axios.post('http://localhost:3001/api/posts', formData)
        .then((res) => {
          setArticles((prev) => [...prev, res.data]);
          setFormData({
            title: '',
            image: '',
            content: '',
            category: 'Tech',
            isPublished: false,
            tags: [],
          });
        })
        .catch((err) => console.error('Errore nell\'aggiungere un articolo:', err));
    }
  };

  // Gestione eliminazione articoli (DELETE)
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/posts/${id}`)
      .then(() => {
        setArticles((prev) => prev.filter((article) => article.id !== id));
      })
      .catch((err) => console.error('Errore nell\'eliminare l\'articolo:', err));
  };

  return (
    <div className="App">

      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </div>

      <h1>React Blog Form Multifield</h1>

      <form onSubmit={handleSubmit}>
        {/* Campi del form */}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Inserisci il titolo dell'articolo"
        />
        <br />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          placeholder="URL dell'immagine"
        />
        <br />

        <textarea
          name="content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          placeholder="Inserisci il contenuto dell'articolo"
        />
        <br />

        <select
          name="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <option value="Tech">Tech</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Education">Education</option>
        </select>
        <br />

        <label>
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
          />
          Pubblica l'articolo
        </label>
        <br />

        <fieldset>
          <legend>Tags:</legend>
          {["React", "JavaScript", "CSS"].map((tag) => (
            <label key={tag}>
              <input
                type="checkbox"
                value={tag}
                checked={formData.tags.includes(tag)}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData((prev) => ({
                    ...prev,
                    tags: e.target.checked
                      ? [...prev.tags, value]
                      : prev.tags.filter((t) => t !== value),
                  }));
                }}
              />
              {tag}
            </label>
          ))}
        </fieldset>
        <br />

        <button type="submit">Aggiungi Articolo</button>
      </form>

      <label>Filtra per Tag:</label>
      <select value={filterTag} onChange={(e) => setFilterTag(e.target.value)}>
        <option value="">Tutti</option>
        <option value="React">React</option>
        <option value="JavaScript">JavaScript</option>
        <option value="CSS">CSS</option>
      </select>

      <h2>Articoli</h2>
      <ul>
        {articles
          .filter((article) => filterTag === '' || article.tags.includes(filterTag))
          .map((article) => (
            <li key={article.id}>
              <PostCard article={article} handleDelete={handleDelete} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;