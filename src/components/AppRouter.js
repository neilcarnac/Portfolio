import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import ContactMe from '../ContactMe';
import Resume from '../Resume';
import Projects from '../Projects';

function AppRouter() {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/contact" element={<ContactMe />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/projects" element={<Projects />} />


    </Routes>
    
    </>
  )
}

export default AppRouter
