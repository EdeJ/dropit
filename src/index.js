import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
// TODO this is temp for github pages
// import { HashRouter as Router } from 'react-router-dom'
import PlayerContextProvider from './components/context/PlayerContextProvider';
import { AuthProvider } from './hooks/authentication';

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
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
