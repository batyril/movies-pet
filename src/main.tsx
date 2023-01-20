import React from 'react';
import { createRoot } from 'react-dom/client';
import './main.sass';
import { Provider } from 'react-redux';
import App from './components/app/App';
import store from './redux/store';

const domNode: HTMLElement | null = document.getElementById('root');
if (domNode) {
  const root = createRoot(domNode);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
