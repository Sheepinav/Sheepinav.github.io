import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import AboutMe from './AboutMe';
import PhotoLinks from './PhotoLinks';
import Skills from './Skills';
import Current from './Current';
import SelectedWorks from './SelectedWorks';
import 'react-flexview/lib/flexView.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <div id="parallax">
          <NavBar />
          <PhotoLinks />
        </div>
          <AboutMe />
          <Current />
          <Skills />
          <SelectedWorks />


        <Footer />
      </div>
    );
  }
}

export default App;
