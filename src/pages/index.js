import * as React from "react"
import Header from "../components/header"
import Home from "../components/home"
import Experience from "../components/experience"
import Projects from "../components/project"
import styled from 'styled-components';

const MainBody = styled.div`
  
  
`


// markup
const IndexPage = () => {
  return (
    <MainBody>
      <Header />
      <Home />
      <Experience />
      <Projects />
    </MainBody>
  )
}

export default IndexPage
