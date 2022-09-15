import Header from "./components/Header/Header";
import SideWidget from "./components/SideWidget/SideWidget";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectModal from "./components/ProjectModal/ProjectModal";

import { useState, useEffect } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [scrollDir, setScrollDir] = useState("scrolling up");

  {
    /*useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]); */
  }

  return (
    <div className="main-container">
      {openModal && <ProjectModal setOpenModal={setOpenModal}></ProjectModal>}
      <Header scrollDir={scrollDir}></Header>
      <SideWidget type={"left"}></SideWidget>
      <SideWidget type={"right"}></SideWidget>
      <div className="content-container">
        <Hero></Hero>

        <About></About>
        <Projects setOpenModal={setOpenModal}></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
