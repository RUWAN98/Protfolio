import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import './App.css'
import Skills from "./component/Skills/Skills";
import WorkExperience from "./component/WorkExperience/WorkExperience";
import ContactMe from "./component/ContactMe/ContactMe";
import Footer from "./component/Footer/Footer";

const App = () => {
  return(
   <>
   <Navbar/>
   <div className="container">
   <Hero />
   <Skills />
   <WorkExperience />
   <ContactMe />
   </div>
   <Footer />
   </>
  )
}

export default App