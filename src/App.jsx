
import Header from "./components/Header/Header";
import SideWidget from "./components/SideWidget/SideWidget";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ProjectModal from "./components/ProjectModal/ProjectModal";

import { useState } from "react";


function App() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="App main-container">
      {openModal && <ProjectModal setOpenModal={setOpenModal}></ProjectModal>}
      <Header></Header>
      <SideWidget type={"left"}></SideWidget>
      <SideWidget type={"right"}></SideWidget>
      <div className="content-container">
        <Hero></Hero>
        <About></About>
        <Projects setOpenModal={setOpenModal}></Projects>
        <Contact></Contact>
        
      </div>
      
    </div>
  );
}

export default App;
