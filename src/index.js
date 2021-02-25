import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import PlayerContextProvider from './components/context/PlayerContextProvider'
import { AuthProvider } from './hooks/authentication'

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <PlayerContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </PlayerContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
