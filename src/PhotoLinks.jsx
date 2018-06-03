import React, { Component } from 'react';
import Github from './images/GitHub-Mark-32px.png';
import Linkedin from './images/In-2C-34px-TM.png';
import './App.css';
import FlexView from 'react-flexview';
import {  animateScroll as scroll} from 'react-scroll';


class Photo_Links extends Component {
  render() {
    return (

        <div id= "Photo_Links">
          <FlexView column style={{height:50}} />
          <FlexView column style={{ height: 400 }} vAlignContent='center' className="PhotoLinks">
            <FlexView row hAlignContent='center'>

              <svg width="150" >
                <line x1="0" y1="100" x2="200" y2="100" style={{stroke:"rgb(255,255,255)", strokeWidth:3}} />
              </svg>
              <FlexView style={{width:20}}></FlexView>
              <p className = "Nametext">
                Abhinav Bhaskar
              </p>
              <FlexView style={{width:20}}></FlexView>
              <svg width="150">
                <line x1="0" y1="100" x2="200" y2="100" style={{stroke:"rgb(255,255,255)", strokeWidth:3}} />
              </svg>

            </FlexView>
            <p className = "descriptext" >Bridging the gap between Web Development and Data Science</p>
            <FlexView row hAlignContent='center'>
              <a href = "https://www.github.com/sheepinav">
                <img src = {Github} id="Github" alt=""/>
              </a>
              <span style={{width:30}}></span>
              <a href = "https://www.linkedin.com/a-bhaskar">
                <img src = {Linkedin} id="Linkedin" alt="" />
              </a>
            </FlexView>
          </FlexView>
          <FlexView style={{height:100}}></FlexView>



          <a onClick={() => scroll.scrollTo(860)}>
            <div class="bottom-arrow-svg">
              <svg width="100">

                <line x1="0" y1="0" x2="51" y2="30" style={{stroke:"rgb(255,255,255)", strokeWidth:4}} />
                <polygon points="75,30"></polygon>
                <line x1="100" y1="0" x2="49" y2="30" style={{stroke:"rgb(255,255,255)", strokeWidth:4}} />

              </svg>
            </div>
          </a>


        </div>

    )
  }
}

export default Photo_Links;
