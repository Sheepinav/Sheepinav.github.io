import React, { Component } from 'react';
import './App.css';
import FlexView from 'react-flexview';
import housingcrisis from './images/housingcrisis.png';
import popmodeling from './images/popmodeling.png';
import {  Element } from 'react-scroll';

class AboutMe extends Component {
  render() {
    return (

        <div id= "SelectedWorks">
          <FlexView style={{height:50}}></FlexView>
          <FlexView row>

            <FlexView column basis={100}></FlexView>
            <Element name="selectedWorks"></Element>
            <FlexView column basis={300} >
              <FlexView row hAlignContent='center'><h2> Selected Works </h2></FlexView>
              <FlexView row hAlignContent='center'>
                <svg width="240" height="20">
                  <line x1="0" y1="10" x2="240" y2="10" style={{stroke:"rgb(52, 58, 64)", strokeWidth:4}} />
                </svg>
              </FlexView>
            </FlexView>
            <FlexView column basis={100}></FlexView>
            <FlexView column>

              <FlexView row grow>

                <FlexView column style={{width:400}}>
                  <a href= "https://susa.berkeley.edu/housingcrisis" target="_blank">
                    <img src={housingcrisis} id="housingcrisis" alt=""></img>
                  </a>
                </FlexView>
                <FlexView column style={{width:50}}></FlexView>
                <FlexView column basis={320} hAlignContent='left' style={{display:"inline"}}>
                  A Spring 2018 project as part of one of the Statistics Undergraduate Student Association at Berkeley's Data Consulting Committees.
                  This was submitted as part of a competition hosted by the CTSP at Berkeley and sponsored by Facebook. We ended up winning 2nd place.
                  A full description of our project will be updated later, but our project proposal can be found <a href="https://susa.berkeley.edu/blog/data-for-good-proposal" id="blogLinks">Here.</a>
                </FlexView>

              </FlexView>


              {/* helps to space out images */}
              <FlexView style={{height:50}}></FlexView>

              <FlexView row grow>
                <FlexView column style={{width:400}}>
                  <a href= "https://susa.berkeley.edu/webapp" target="_blank">
                    <img src={popmodeling} id="popmodeling" alt=""></img>
                  </a>
                </FlexView>
                <FlexView column style={{width:50}}></FlexView>
                <FlexView column basis={320} hAlignContent='left'>
                  <p>A Fall 2018 project as part of one of the Statistics Undergraduate Student Association at Berkeley's Data Consulting Committees.
                    This was a project dedicated to modeling the demographic transition of 10 countries including the US and China as well as using Machine Learning and Time Series techniques to predict future growth.
                  </p>
                  </FlexView>
              </FlexView>

              <FlexView grow></FlexView>
            </FlexView>
          </FlexView>
          <FlexView row basis={100}></FlexView>
          </div>

    )
  }
}

export default AboutMe;
