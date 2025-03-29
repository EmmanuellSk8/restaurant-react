import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import PostHero from './components/PostHero';
import PreMenu from './components/PreMenu';
import Menu from './components/Menu';
import './index.css';
import About from './components/About';
import ContainerMenu from './components/ContainerMenu';
import Reservation from './components/Reservation';

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuVisible(prev => !prev);
  };

  return (
    <section className='w-full justify-center items-center flex flex-col'>


        <Hero />
        <PostHero />
        <ContainerMenu/>
        <About />
        <Reservation/>
    </section>
  );
}

export default App;
