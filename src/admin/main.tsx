// src/admin/main.tsx
// Vite entry point for the Admin SPA.
// Imports global styles and mounts the AdminApp into #root.

import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminApp from './AdminApp';
import '../styles/index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Admin: Could not find #root element to mount the application.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AdminApp />
  </React.StrictMode>
);
