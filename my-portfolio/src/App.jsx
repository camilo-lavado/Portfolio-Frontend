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

function App() {
  const { width } = useWindowSize();
  const isMobile = width <= 960;

  return (
    <div className="App">
      {isMobile ? <BottomNav /> : <Header />}
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
