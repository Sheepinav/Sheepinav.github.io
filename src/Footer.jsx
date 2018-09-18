import React, { Component } from 'react';
//import logo from './logo.svg'
import './App.css';
import FlexView from 'react-flexview';

class Footer extends Component {
  render() {
    return (
      <footer>
        <FlexView style={{height:50}}></FlexView>
        <div id= "Footerthing">
          <FlexView row="true" style={{height:50}}></FlexView>
          <FlexView row="true">
            <FlexView column basis='5%'></FlexView>
            <FlexView column basis='30%'>
              <FlexView row="true" basis='40%' hAlignContent='center'><h2>Contact Me:</h2></FlexView>
              <FlexView row="true" hAlignContent='center'>
                <svg width="160" height="40">
                  <line x1="0" y1="10" x2="160" y2="10" style={{stroke:"rgb(255,255,255)", strokeWidth:4}} />
                </svg>
              </FlexView>
            </FlexView>
            <FlexView column basis='5%'></FlexView>
            <FlexView column basis='15%'>
              <FlexView row="true">Abhinav Bhaskar</FlexView>
              <FlexView row="true">abhaskar@berkeley.edu</FlexView>
              <FlexView row="true">2115 Haste Street, Apt. 102,</FlexView>
              <FlexView row="true">Berkeley, CA 94704</FlexView>
            </FlexView>
          </FlexView>
          <FlexView row="true" style={{height:100}}></FlexView>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> */}
        </div>
      </footer>
    )
  }
}

export default Footer;
