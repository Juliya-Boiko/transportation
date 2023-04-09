import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { store } from 'redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'modern-normalize';
import '../node_modules/react-bootstrap/dist/react-bootstrap.min';
import './styles/index.scss';
import './services/notifyConfig';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/transportation'>
        <App />    
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
