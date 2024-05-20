// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';
import BottomNav from './components/BottomNav';
import useWindowSize from './hooks/useWindowSize';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  const { width } = useWindowSize();
  const isMobile = width <= 960;

  return (
    <div className="App">
      <BackgroundAnimation /> {/* Añadir el fondo animado */}
      {isMobile ? <BottomNav /> : <Header />}
      <div id="home" className="section"><Home /></div>
      <div id="about" className="section"><About /></div>
      <div id="experience" className="section"><Experience /></div>
      <div id="projects" className="section"><Projects /></div>
      <div id="contact" className="section"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
