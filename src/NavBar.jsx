import React, { Component } from 'react';
import './App.css';
import FlexView from 'react-flexview';
import { Link} from 'react-scroll';

class NavBar extends Component {

  render() {
    return (

        <header className="App-header">
          <FlexView className="Nav-Bar">
            <FlexView row grow />
            <FlexView row basis={500} hAlignContent="center">

              <FlexView grow hAlignContent='center' vAlignContent='center'><Link activeClass="active" className="myDescription" to="myDescription" spy={true} smooth={true} duration={550} >About Me</Link></FlexView>
              <FlexView grow hAlignContent='center' vAlignContent='center'><Link activeClass="active" className="currentWorks" to="currentWorks" spy={true} smooth={true} duration={500} >Current Work</Link></FlexView>
              <FlexView grow hAlignContent='center' vAlignContent='center'><Link activeClass="active" className="mySkills" to="skills" spy={true} smooth={true} duration={700} >My Skills</Link></FlexView>
              <FlexView grow hAlignContent='center' vAlignContent='center'><Link activeClass="active" className="selectedWorks" to="selectedWorks" spy={true} smooth={true} duration={1000} >Selected Works</Link></FlexView>
            </FlexView>
            <FlexView row grow />
          </FlexView>
          {/* <div>
            <Navbar className="Nav-Bar" >
              <Nav>
            <NavItem>
            <NavLink href="#AboutMe"> About</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="Current">Current Work</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#Skills">Skills</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#SelectedWorks">Selected Works</NavLink>
            </NavItem>

              </Nav>
            </Navbar>
          </div> */}
          <div className="spacetest"></div>
      </header>
    )
  }
}

export default NavBar;
