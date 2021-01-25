import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

//we're going to pass all the info from the router
//to any nested component
ReactDOM.render(
  <Router>
     <App />

  </Router>,
   document.getElementById('root')
);