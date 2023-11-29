import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TeamList from './Components/teamsList';
import DriverList from './Components/driverList';
import TrackList from './Components/trackList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/teams" exact component={TeamList} />
        <Route path="/drivers" exact component={DriverList} />
        <Route path="/tracks" exact component={TrackList} />
      </Switch>
    </Router>
  );
};

