import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <App />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
