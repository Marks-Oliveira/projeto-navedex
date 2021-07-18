import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import { UserIssuesProvider } from './providers/userContext';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <UserIssuesProvider>
      <ToastContainer />
      <App />
    </UserIssuesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
