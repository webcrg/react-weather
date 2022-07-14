import React from 'react';
import { Weather } from './pages/weather';
import './style/App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
