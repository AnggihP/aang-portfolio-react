// import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Projects from "./Swipe.Project"
import Techs from "./Tech"



function Home() {
  return (
    <>
     <Header/> 
     <Projects/>
     <Techs/> 
     {/* <Contact/> */}
     <Footer/>
    </>
  )
}

export default Home