import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import ContainerHomePage from './components/ContainerHomePage';
import ContainerReservation from './components/ContainerReservation';
import ReservationHeader from './components/HeaderReservation';
import { Link, Route, Routes } from "react-router-dom";


function App() {

  const location = useLocation();
  const isReservationsPath = location.pathname.startsWith("/Reservations")

  return (
    <section className='w-full justify-center items-center flex flex-col'>

      {!isReservationsPath ? <Header /> : <ReservationHeader />}

      {/* Todas las rutas en un solo lugar */}
      <Routes>
        <Route path="/" element={<ContainerHomePage />} />
        <Route path="/Reservations/*" element={<ContainerReservation />} />
      </Routes>
    </section>


  );
}

export default App;
