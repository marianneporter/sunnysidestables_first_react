import React from 'react';
import ReactDOM from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHorse, faBars } from '@fortawesome/free-solid-svg-icons'

import App from './App';

library.add( faHorse, faBars)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
 

)