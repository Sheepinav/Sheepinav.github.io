import React, { Component } from 'react';
import './App.css';
import FlexView from 'react-flexview';
import {  Element } from 'react-scroll';

class Skills extends Component {

  render() {
    return (

        <div id= "Skills">
          <div id="skillsContainer">
            <Element name="skills"></Element>
            <FlexView style={{height:50}}></FlexView>

            <FlexView row>
              <FlexView column basis={100}></FlexView>

              <FlexView column basis={300} hAlignContent='center'>
                <FlexView row hAlignContent='center'><h2> My Skills </h2></FlexView>
                <FlexView row hAlignContent='center'>
                  <svg width="150" height="20">
                    <line x1="0" y1="10" x2="150" y2="10" style={{stroke:"rgb(52, 58, 64)", strokeWidth:4}} />
                  </svg>
                </FlexView>
              </FlexView>
              <FlexView column basis={100}></FlexView>
              <FlexView column grow>
                <FlexView column>

                  <FlexView row grow className ="skillContainer">
                    <div class="skills html">HTML/CSS</div>
                  </FlexView>
                </FlexView>
                <FlexView column basis={30}></FlexView>
                <FlexView column>
                  <FlexView row grow className ="skillContainer">
                    <div class="skills js">Javascript Libraries (D3.js, leaflet.js, etc...)</div>
                  </FlexView>
                </FlexView>
                <FlexView column basis={30}></FlexView>
                <FlexView column>
                  <FlexView row grow className ="skillContainer">
                    <div class="skills react">React.js</div>
                  </FlexView>
                </FlexView>
                <FlexView column basis={30}></FlexView>
                <FlexView column>
                  <FlexView row grow className ="skillContainer">
                    <div class="skills r">R</div>
                  </FlexView>
                </FlexView>
                <FlexView column basis={30}></FlexView>
                <FlexView column>
                  <FlexView row grow className ="skillContainer">
                    <div class="skills python">Python (Pandas, SciKit Learn, Matplotlib)</div>
                  </FlexView>
                </FlexView>
                <FlexView column basis={30}></FlexView>
                <FlexView column>
                  <FlexView row grow className ="skillContainer">
                    <div class="skills node">node.js/express.js</div>
                  </FlexView>
                </FlexView>
                <FlexView column basis={30}></FlexView>
                <FlexView column>
                  <FlexView row grow className ="skillContainer">
                    <div class="skills django">Django</div>
                  </FlexView>
                </FlexView>
                <FlexView column basis={30}></FlexView>
                <FlexView column>
                  <FlexView row grow className ="skillContainer">
                    <div class="skills ts">Tensorflow</div>
                  </FlexView>
                </FlexView>
              </FlexView>

              <FlexView column basis={150}></FlexView>
            </FlexView>


          </div>
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

export default Skills;
