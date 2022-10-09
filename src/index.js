import React from 'react';
import ReactDOM from 'react-dom/client';

/* ----------- Admin LTE ----------- */
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/plugins/jquery/jquery.min.js';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/dist/js/adminlte.min.js';

import './style.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);