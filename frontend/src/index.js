import React from 'react';
import { createRoot } from 'react-dom/client';

// import { Provider } from 'react-redux';
// import {store}  from './app/store';
import App from './App';
import './index.css';
import { AuthProvider } from './pages/context/auth';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
 <AuthProvider>
  <App />
 </AuthProvider>
);


