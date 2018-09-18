import React, { Component } from 'react';
import Github from './images/GitHub-Mark-32px.png';
import Linkedin from './images/In-2C-34px-TM.png';
import './App.css';
import FlexView from 'react-flexview';
import {  animateScroll as scroll} from 'react-scroll';


class Photo_Links extends Component {
  render() {
    return (

        <div id= "Photo_Links" >
          <div id="filler" />
          <FlexView>
            <FlexView grow column vAlignContent='center'>
              <div className="PhotoLinks">
                <FlexView row="true" hAlignContent='center' basis='50%'>

                  <FlexView column basis='5%'>

                  </FlexView>
                  <FlexView column basis='10%' vAlignContent='center'>

                  </FlexView>
                  <FlexView  column basis='70%'>
                    <div id="filler2" />
                    <p className = "Nametext">
                      Abhinav Bhaskar
                    </p>
                  </FlexView>
                  <FlexView column basis='10%' vAlignContent='center'>

                  </FlexView>
                  <FlexView column basis='5%'>

                  </FlexView>
                  {/*<svg width="150" >
                    <line x1="0" y1="100" x2="200" y2="100" style={{stroke:"rgb(255,255,255)", strokeWidth:3}} />
                    </svg>
                    <FlexView style={{width:20}}></FlexView>
                    <p className = "Nametext">
                    Abhinav Bhaskar
                    </p>
                    <FlexView style={{width:20}}></FlexView>
                    <svg width="150">
                    <line x1="0" y1="100" x2="200" y2="100" style={{stroke:"rgb(255,255,255)", strokeWidth:3}} />
                  </svg>*/}

                </FlexView>
                <p className = "descriptext" >Bridging the gap between Web Development and Data Science</p>
                <FlexView row="true" hAlignContent='center'>
                  <a href = "https://www.github.com/sheepinav">
                    <img src = {Github} id="Github" alt=""/>
                  </a>
                  <span style={{width:30}}></span>
                  <a href = "https://www.linkedin.com/a-bhaskar">
                    <img src = {Linkedin} id="Linkedin" alt="" />
                  </a>
                </FlexView>


                <div id="filler2" />
                <div id="filler2" />
              </div>
              <div id="filler3" />


              <div className = 'arrow'>
                <a onClick={() => scroll.scrollTo(860)}>
                  <svg width="100" className="down-arrow">

                    <line x1="0" y1="0" x2="51" y2="30" style={{stroke:"rgb(255,255,255)", strokeWidth:4}} />
                    <polygon points="75,30"></polygon>
                    <line x1="100" y1="0" x2="49" y2="30" style={{stroke:"rgb(255,255,255)", strokeWidth:4}} />

                  </svg>
                </a>
              </div>
            </FlexView>
          </FlexView>


          </div>

    )
  }
}

export default Photo_Links;
