import React, { Component } from 'react';
import './App.css';
import FlexView from 'react-flexview';
import twitterflask from './images/twitterflask.png';
import webdev0 from './images/webdevtutorial0.png';
import housingcrisis from './images/housingcrisis.png';
import popmodeling from './images/popmodeling.png';
import personalwebsite from './images/personalwebsite.png';
import {  Element } from 'react-scroll';

class AboutMe extends Component {
  render() {
    return (

        <div id= "SelectedWorks">
          <Element name="selectedWorks"></Element>
          <FlexView style={{height:50}}></FlexView>
          <FlexView row="true">

            <FlexView column basis='10%'></FlexView>
            <FlexView column basis='20%' >
              <FlexView row="true" hAlignContent='center'><h2> Selected Works </h2></FlexView>
              <FlexView row="true" hAlignContent='center'>
                <svg width="240" height="20">
                  <line x1="0" y1="10" x2="240" y2="10" style={{stroke:"rgb(52, 58, 64)", strokeWidth:4}} />
                </svg>
              </FlexView>
            </FlexView>
            <FlexView column basis='5%'></FlexView>
            <FlexView column basis='50%'>

              <FlexView row="true" >

                <FlexView column basis='45%'>

                  <img src={twitterflask} id="twitterflask" alt=""></img>

                </FlexView>
                <FlexView column basis='10%'></FlexView>
                <FlexView column basis='50%' hAlignContent='left' style={{display:"inline"}}>
                  An in-progress <b>Web Application</b> where users can enter any twitter handle and obtain a comprehensive set of data visualizations based on the user's last 100 tweets. This application makes use of Twitter's <b>'Tweepy' API</b> and a <b>Sqlite3</b> database to handle data. The visualizations are created with <b>Python</b> and a <b>Flask</b> microframework holds it all together.
                </FlexView>

              </FlexView>

              {/* helps to space out images */}
              <FlexView style={{height:50}}></FlexView>

              <FlexView row="true" >

                <FlexView column basis='45%'>
                  <a href= "https://susa.berkeley.edu/education">
                    <img src={webdev0} id="webdev0" alt=""></img>
                  </a>
                </FlexView>
                <FlexView column basis='10%'></FlexView>
                <FlexView column basis='50%' hAlignContent='left' style={{display:"inline"}}>
                  A series of <b>Web Development Tutorials</b> created by me and my good friend and co-director Anthony Yu to introduces readers to web development by guiding them through making their own <b>personal website</b>. It is currently under construction, and may feature later entries in advanced topics such as front end development in <b>Javascript</b> and data visualization with <b>Flask</b> and <b>Python</b>. I am the main author in Parts 0, 2 and 3.
                </FlexView>

              </FlexView>

              {/* helps to space out images */}
              <FlexView style={{height:50}}></FlexView>

              <FlexView row="true" >

                <FlexView column basis='45%'>
                  <a href= "https://susa.berkeley.edu/housingcrisis">
                    <img src={housingcrisis} id="housingcrisis" alt=""></img>
                  </a>
                </FlexView>
                <FlexView column basis='10%'></FlexView>
                <FlexView column basis='50%' hAlignContent='left' style={{display:"inline"}}>
                  A Spring 2018 project as part of one of the Statistics Undergraduate Student Association's <b>Data Consulting Committees</b>.
                  Won 2nd place as part of a competition hosted by the <b>CTSP at Berkeley</b> and sponsored by <b>Facebook</b> in part by building a <b>web application</b> using <b>Leaflet.js</b>.
                  A full description of our project will be updated later, but our project proposal can be found <a href="https://susa.berkeley.edu/blog/data-for-good-proposal" id="blogLinks">Here.</a>
                </FlexView>

              </FlexView>


              {/* helps to space out images */}
              <FlexView style={{height:50}}></FlexView>

              <FlexView row="true" grow>
                <FlexView column basis='45%'>
                  <a href= "https://susa.berkeley.edu/webapp">
                    <img src={popmodeling} id="popmodeling" alt=""></img>
                  </a>
                </FlexView>
                <FlexView column basis='10%'></FlexView>
                <FlexView column basis='50%' hAlignContent='left'>
                  <p>A Fall 2018 project as part of one of the Statistics Undergraduate Student Association's <b>Data Consulting Committees</b>.
                    This was a project dedicated to modeling the demographic transition of 10 countries including the US and China as well as using Machine Learning and Time Series techniques to predict future growth. The <b>Web Application</b> was created using <b>D3.js</b>.
                  </p>
                </FlexView>
              </FlexView>

              {/* helps to space out images */}
              <FlexView style={{height:50}}></FlexView>

              <FlexView row="true" grow>
                <FlexView column basis='45%'>
                  <a href= "http://sheepinav.github.io">
                    <img src={personalwebsite} id="personalwebsite" alt=""></img>
                  </a>
                </FlexView>
                <FlexView column basis='10%'></FlexView>
                <FlexView column basis='50%' hAlignContent='left'>
                  <p>My <b>Personal Website</b> which you are currently on. This was created with a combination of <b>React.js</b>, <b>Node.js</b> and <b>Express.js</b> as well as standard <b>HTML/CSS</b> as an exercise in learning new web technologies. I will continue to work on this and possibly implement advanced backend functionality after I decide on a hosting service and domain name.
                  </p>
                </FlexView>
              </FlexView>

              <FlexView grow></FlexView>
            </FlexView>
            <FlexView column basis='10%' />
          </FlexView>
          <FlexView row="true" basis={100}></FlexView>
          </div>

    )
  }
}

export default AboutMe;
