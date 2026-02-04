import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Performance monitoring (optional)
const enableProfiling = import.meta.env.PROD;

// Get the root element
const container = document.getElementById('root');

if (!container) {
  throw new Error("Root element not found");
}

// Create root and render
const root = createRoot(container);

root.render(
  <StrictMode>
    {enableProfiling ? (
      <React.Profiler id="App" onRender={() => {}}>
        <App />
      </React.Profiler>
    ) : (
      <App />
    )}
  </StrictMode>
);

// Service Worker registration (for PWA)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}
