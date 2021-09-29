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
import styled from 'styled-components';

import Pdf from '../components/pdfs/karan_yadav_resume.pdf';
import { Document, Page } from 'react-pdf';

const MainBody = styled.div`
  height: 100%;
  background-color: #082032;
  
`

//Congrats on finding this comment!
//Normally I would have something quirky here but I'm too lazy

const IndexPage = () => {
  <Route exact path="/#resume">
    <Redirect to="/static/karan_yadav_resume-7ade55bb4b9adbf43ce09b65c44e0c68.pdf" />
  </Route>
  return (
    <MainBody>
      <Header />
      <Home />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </MainBody>
  )
}

export default IndexPage
