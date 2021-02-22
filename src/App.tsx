import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from './pages/home/home.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <HomePage></HomePage>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
