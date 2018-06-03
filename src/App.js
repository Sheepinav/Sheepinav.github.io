import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import AboutMe from './AboutMe';
import PhotoLinks from './PhotoLinks';
import Skills from './Skills';
import Current from './Current';
import SelectedWorks from './SelectedWorks';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import 'react-flexview/lib/flexView.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <div id="parallax">
          <NavBar />
          <PhotoLinks />
          <AboutMe />
          <Current />
          <Skills />
          <SelectedWorks />

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
