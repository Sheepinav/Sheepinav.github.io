import React, { Component } from 'react';
import myFace from './images/myFace.jpg';
import './App.css';
import FlexView from 'react-flexview';
import {  Element } from 'react-scroll';


class AboutMe extends Component {

  render() {
    return (

        <div id= "AboutMe">

          <FlexView row style={{height:500}}>
            <FlexView hAlignContent='center' vAlignContent= 'center' basis={500} >
              <FlexView column>
                <img src={myFace} id="myFacePic" alt=""></img>
              </FlexView>
            </FlexView>
            <Element name="myDescription"></Element>
            <FlexView column>
              <FlexView row basis={100}></FlexView>
              <FlexView row hAlignContent='center'><h1 className="App-title">About Me</h1></FlexView>
              <FlexView row hAlignContent='center'>
                <svg width="160" height="40">
                  <line x1="0" y1="10" x2="160" y2="10" style={{stroke:"rgb(255,255,255)", strokeWidth:4}} />
                </svg>
              </FlexView>

              <FlexView row hAlignContent='center'><i>UC Berkeley - Applied Mathematics - Expected Graduation: May 2020</i></FlexView>
              <FlexView row basis={20}></FlexView>
              <FlexView row hAlignContent='left' vAlignContent='center'>
                I am a student at UC Berkeley majoring in Applied Mathematics who seeks to solve real world problems
                using applications of Statistics and Data Science. I am especially interested in Web Development’s applications to fields
                such as Machine Learning and Data Science to create visualizations and communicate my findings to my peers and the public.
              </FlexView>
              <FlexView basis={20}></FlexView>
              <FlexView hAlignContent='center'>I am currently looking for a position that will make use of my skills in statistical modeling and data visualization. </FlexView>
              <FlexView hAlignContent='center'>Have an open position in need of a motivated self-starter? Don't hesitate to contact me!</FlexView>
            </FlexView>
            <FlexView basis={100}></FlexView>
          </FlexView>
        </div>

    )
  }
}

export default AboutMe;
