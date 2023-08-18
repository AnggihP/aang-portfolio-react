// import React from 'react'
import Header from "../components/Header"
// import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Projects from "../components/Swipe.Project"
import Skills from "../components/Skills.Grid"

function Home() {
  return (
    <>
     <Header/> 
     <Projects/>
     <Skills/> 
     {/* <Contact/> */}
     <Footer/>
    </>
  )
}

export default Home