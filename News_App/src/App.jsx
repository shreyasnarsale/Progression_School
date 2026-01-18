import React from 'react';
import { articleData } from './data';
import './App.css';

// --- SUB-COMPONENTS ---

// 1. Header Component
const Header = () => (
  <header className="navbar">
    <div className="logo-box">THE HINDU</div>
    <nav className="nav-links">
      <button>Home</button>
      <button>World</button>
      <button>Tech</button>
      <button>Health</button>
      <button>About</button>
      <button className="contact-nav">Contact</button>
    </nav>
  </header>
);

// 2. Hero Component
const Hero = () => (
  <section className="hero-banner">
    <div className="hero-overlay">
      <h1>Leading the Conversation</h1>
      <p>Independent Journalism for a Better World</p>
    </div>
  </section>
);

// 3. Individual Article Card with Image Error Handling
const ArticleCard = ({ article }) => {
  const handleError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop';
  };

  return (
    <div className="card">
      <div className="image-wrapper">
        <img 
          src={article.urlToImage} 
          alt={article.title} 
          onError={handleError} 
        />
        <span className="category-tag">{article.category}</span>
      </div>
      <div className="card-content">
        <p className="article-date">
          {new Date(article.publishedAt).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          })}
        </p>
        <h3 className="article-title">{article.title}</h3>
        <p className="article-snippet">{article.description}</p>
        <div className="card-footer">
          <span className="author-name">By {article.author}</span>
          <button className="read-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

// 4. Articles Section (The Grid Container)
const ArticlesGrid = ({ data }) => (
  <section className="articles-section">
    <h2 className="section-heading">Featured Articles</h2>
    <div className="grid-container">
      {data.map((item) => (
        <ArticleCard key={item.id} article={item} />
      ))}
    </div>
  </section>
);

// 5. Footer Component
const Footer = () => (
  <footer className="footer-bar">
    <div className="footer-container">
      <p className="copyright">© 2026 All rights reserved.</p>
      <div className="social-circles">
        <span className="icon">F</span>
        <span className="icon">T</span>
        <span className="icon">I</span>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <main>
        <ArticlesGrid data={articleData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
