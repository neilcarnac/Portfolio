import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import ContactMe from '../ContactMe';
import Resume from '../Resume';

function AppRouter() {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/contact" element={<ContactMe />} />
    <Route path="/resume" element={<Resume />} />

    </Routes>
    
    </>
  )
}

export default AppRouter
