import React, { useEffect, useState, Route, Redirect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Header from "../components/header"
import Home from "../components/home"
import Experience from "../components/experience"
import Education from "../components/education"
import Projects from "../components/project"
import Contact from "../components/contact"
import Terminal from "../components/terminal"
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import Pdf from '../components/pdfs/karan_yadav_resume.pdf';
import { Document, Page } from 'react-pdf';

const MainBody = styled.div`
  height: 100%;
  background-color: #082032;
  
`

//Congrats on finding this comment!
//Normally I would have something quirky here but I'm too lazy

const IndexPage = () => {
  // var Expire = React.createClass({
  //     getDefaultProps: function() {
  //       return {delay: 1000};
  //     },
  //     getInitialState: function(){
  //       return {visible: true};
  //     },
  //     componentWillReceiveProps: function(nextProps) {
  //       // reset the timer if children are changed
  //       if (nextProps.children !== this.props.children) {
  //         this.setTimer();
  //         this.setState({visible: true});
  //       }
  //     },
  //     componentDidMount: function() {
  //         this.setTimer();
  //     },
  //     setTimer: function() {
  //       // clear any existing timer
  //       this._timer != null ? clearTimeout(this._timer) : null;
    
  //       // hide after `delay` milliseconds
  //       this._timer = setTimeout(function(){
  //         this.setState({visible: false});
  //         this._timer = null;
  //       }.bind(this), this.props.delay);
  //     },
  //     componentWillUnmount: function() {
  //       clearTimeout(this._timer);
  //     },
  //     render: function() {
  //       return this.state.visible 
  //             ? <div>{this.props.children}</div>
  //             : <span />;
  //     }
  //   });
  return (
    <MainBody>
      <CSSTransition>
        <Terminal />
      </CSSTransition>
      {/* <Header />
      <Home />
      <Experience />
      <Education />
      <Projects />
      <Contact /> */}
    </MainBody>
  )
}

export default IndexPage
