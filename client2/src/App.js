import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Join from './components/Join/join';
import Chat from './components/Chat/chat';

const App = () => (
  <Router>
    <Route path='/' exact component={Join}></Route>
    <Route path='/chat' component={Chat}></Route>
  </Router>
);


export default App;
