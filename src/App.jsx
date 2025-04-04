import React from 'react';
import Hero from './components/Hero';
import PostHero from './components/PostHero';
import './index.css';
import About from './components/About';
import ContainerMenu from './components/ContainerMenu';
import Footer from './components/Footer';


function App() {

  return (
    <section className='w-full justify-center items-center flex flex-col'>


        <Hero />
        <PostHero />
        <ContainerMenu/>
        <About />
        <Footer/>
    </section>


  );
}

export default App;
