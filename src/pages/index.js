import * as React from "react"
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

const MainBody = styled.div`
  height: 100%;
  background-color: #082032;
  
`


// markup
const IndexPage = () => {
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
