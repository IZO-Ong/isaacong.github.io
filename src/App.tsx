import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import './styles/variables.css';
import './styles/layout.css';
import './styles/home.css';
import './styles/modules.css';
import './styles/project.css';
import './styles/contact.css';

import Home from './pages/Home';
import Modules from './pages/Modules';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="portfolio-wrapper">
          <nav className="navbar">
            <div className="container nav-content flex-end">
              <ul className="nav-links">
                <li><Link to="/">About</Link></li>
                <li><Link to="/modules">Modules</Link></li>
              </ul>
            </div>
          </nav>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/modules" element={<Modules />} />
            </Routes>
          </main>

          <footer className="footer container">
            <p>© 2026 Built with React and Vite | Isaac Ong</p>
          </footer>
        </div>
      </Router>
    </Provider>
  );
};

export default App;