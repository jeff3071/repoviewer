import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import User  from './components/user'
import App from './App';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);
root.render(
  <Router>
    {/* <App/> */}
    <Routes>
      <Route path="*" element={<App/>} />
    </Routes>
  </Router>

);
