import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
