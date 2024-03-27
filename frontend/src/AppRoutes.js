import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import LoginPage from './pages/Home/Login/LoginPage';

export default function AppRoutes() {
  return (
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
   </Routes>
  );
}
