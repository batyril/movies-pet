import React from 'react';
import { createRoot } from 'react-dom/client';
import './main.sass';
import App from './components/app/App';

const domNode: HTMLElement | null = document.getElementById('root');
if (domNode) {
  const root = createRoot(domNode);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
