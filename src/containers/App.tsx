import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';


import AppRouter from './pages/AppRouter';

const App: React.FC = () => {
  return (
    <Router>
      <AppRouter/>
    </Router>
  );
};

export default App;
