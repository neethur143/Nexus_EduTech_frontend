import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SideBar from './pages/AdminDashboard/SideBar.jsx'
import Dashboard from './pages/AdminDashboard/Dashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
)
