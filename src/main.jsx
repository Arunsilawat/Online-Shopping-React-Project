import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/style.css'
import Store from './Pages/Store.jsx';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={Store}>
      <App />
 </Provider>
)

