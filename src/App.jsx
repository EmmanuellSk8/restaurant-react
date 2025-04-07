import React from 'react';
import Hero from './components/Hero';
import PostHero from './components/PostHero';
import './index.css';
import About from './components/About';
import ContainerMenu from './components/ContainerMenu';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateReservation from './components/CreateReservation';
import GetReservation from './components/GetReservation';
import UpdateReservation from './components/UpdateReservation';
import DeleteReservation from './components/DeleteReservation';


function App() {

  return (
    <section className='w-full justify-center items-center flex flex-col'>

        <Header/>
        <Hero />
        <PostHero />
        <ContainerMenu/>
        <About />
        <Footer/>

    </section>


  );
}

export default App;
