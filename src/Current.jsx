import React, { Component } from 'react';
import './App.css';
import FlexView from 'react-flexview';
import SUSA from './images/susafinallogo.png';
import FFC from './images/FFC.png';
import {  Element } from 'react-scroll';

class Current extends Component {
  render() {
    return (

        <div id= "Current">
          <Element name="currentWorks"></Element>
          <FlexView style={{height:100}}></FlexView>
          <FlexView row>

            <FlexView column basis={100}></FlexView>
            <FlexView column basis={300}>
              <FlexView row hAlignContent='center'><h2>Current Work</h2></FlexView>
              <FlexView row hAlignContent='center'>
                <svg width="200" height="20">
                  <line x1="0" y1="10" x2="200" y2="10" style={{stroke:"rgb(52, 58, 64)", strokeWidth:4}} />
                </svg>
              </FlexView>
            </FlexView>
            <FlexView column basis={100}></FlexView>
            <FlexView column style={{width:300}}>
              <FlexView row style={{width:300}}>
                <a href="http://susa.berkeley.edu">
                  <img src={SUSA} id="SUSAlogo" alt=""></img>
                </a>
              </FlexView>
              <FlexView row basis={50}></FlexView>
              <FlexView row style={{width:300}} hAlignContent='center'>
                <a href="http://functionalfoodscenter.net/">
                  <img src={FFC} id="FFClogo" alt=""></img>
                </a>
              </FlexView>
            </FlexView>
            <FlexView column basis={500}>
              <FlexView row hAlignContent='center' >
                <h3>Statistics Undergraduate Student Association</h3>
              </FlexView>
              <FlexView row hAlignContent='center' >
                Web Development Co-Director
              </FlexView>
              <FlexView row hAlignContent='center'>
                <i>April 2018 - Present</i>
              </FlexView>
              <FlexView row basis={100}></FlexView>
              <FlexView row hAlignContent='center'>
                <h3>Functional Food Center</h3>
              </FlexView>
              <FlexView row hAlignContent='center'>
                Web Development and Design Intern
              </FlexView>
              <FlexView row hAlignContent='center'>
                <i>June 2018 - Present</i>
              </FlexView>
            </FlexView>
            <FlexView column basis={100}></FlexView>
          </FlexView>
          <FlexView column style={{height:50}}></FlexView>
          <FlexView column grow hAlignContent='center'>
            <svg width="1200" height="20">
              <line x1="0" y1="10" x2="1200" y2="10" style={{stroke:"rgb(52, 58, 64)", strokeWidth:1}} />
            </svg>
          </FlexView>
        </div>

    )
  }
}

export default Current;
