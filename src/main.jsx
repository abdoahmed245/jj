import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/OneSignalSDKWorker.js', {
    scope: '/',
  }).then(function(registration) {
    console.log('Service Worker registered with scope:', registration.scope);
  }).catch(function(error) {
    console.log('Service Worker registration failed:', error);
  });
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
