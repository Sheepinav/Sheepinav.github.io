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
          <FlexView row="true">

            <FlexView column basis='10%'></FlexView>
            <FlexView column basis='20%'>
              <FlexView row="true" hAlignContent='center'><h2>Current Positions</h2></FlexView>
              <FlexView row="true" hAlignContent='center'>
                <svg width="200" height="20">
                  <line x1="0" y1="10" x2="200" y2="10" style={{stroke:"rgb(52, 58, 64)", strokeWidth:4}} />
                </svg>
              </FlexView>
            </FlexView>

            <FlexView column basis='5%'></FlexView>

            <FlexView column basis='55%'>

              <FlexView row="true">
                <FlexView column hAlignContent='center' basis='40%'>
                  <a href="http://susa.berkeley.edu">
                    <img src={SUSA} id="SUSAlogo" alt=""></img>
                  </a>
                </FlexView>
                <FlexView column basis='5%'></FlexView>
                <FlexView column basis='40%' vAlignContent='center' hAlignContent='center'>
                  <FlexView row='true' basis='5%'></FlexView>
                  <FlexView row='true'>
                    <FlexView column>
                      <h3>Statistics Undergraduate Student Association</h3>
                      <p>Web Development Co-Director</p>
                      <p><i>April 2018 - Present</i></p>
                    </FlexView>
                  </FlexView>
                </FlexView>
                <FlexView column basis='10%'></FlexView>
              </FlexView>

              <FlexView row='true' basis="25%"></FlexView>

              <FlexView row="true">
                <FlexView column basis='5%'></FlexView>
                <FlexView column hAlignContent='center' basis='30%' style={{height:'width'}}>
                  <a href="http://functionalfoodscenter.net/">
                    <img src={FFC} id="FFClogo" alt=""></img>
                  </a>
                </FlexView>
                <FlexView column basis='10%'></FlexView>
                <FlexView column basis='40%' vAlignContent='center' hAlignContent='center'>
                  <FlexView row='true' basis='10%'></FlexView>
                  <FlexView row='true'>
                    <FlexView column>
                      <h3>Functional Food Center</h3>
                      <p>Web Development and Design Intern</p>
                      <p><i>June 2018 - August 2018</i></p>
                    </FlexView>
                  </FlexView>
                </FlexView>
                <FlexView column basis='10%'></FlexView>
              </FlexView>

            </FlexView>
            <FlexView column basis='10%'></FlexView>
          </FlexView>
          <FlexView style={{height:100}}></FlexView>
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
