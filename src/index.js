import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
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
