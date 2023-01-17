import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const domNode: HTMLElement | null = document.getElementById('root');
if (domNode) {
  const root = createRoot(domNode);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
