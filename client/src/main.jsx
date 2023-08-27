import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './login'
import Dashboard from './dashboard'
import 'bootstrap/dist/css/bootstrap.css'

const code = new URLSearchParams(window.location.search).get('code');

ReactDOM.createRoot(document.getElementById('root')).render(code ? <Dashboard code={code} /> :
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
