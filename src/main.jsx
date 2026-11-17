import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FY25App from './fy25/FY25App.jsx'
import './index.css'

// Two editions on one page: the current edition (FY26 data) by default, and
// the FY25 edition (first published March 2026) at ?edition=fy25.
const edition = new URLSearchParams(window.location.search).get('edition')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {edition === 'fy25' ? <FY25App /> : <App />}
  </React.StrictMode>,
)
