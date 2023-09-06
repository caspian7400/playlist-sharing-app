import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Dashboard from './spotify/Dashboard'
import 'bootstrap/dist/css/bootstrap.css'

const code = new URLSearchParams(window.location.search).get('code');

ReactDOM.createRoot(document.getElementById('root')).render(code ? <Dashboard code={code} /> :
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
