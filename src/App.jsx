import { useState } from "react";
import Header from "./components/Header/Header";
import SideWidget from "./components/SideWidget/SideWidget";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App main-container">
      <Header></Header>
      <SideWidget type={"left"}></SideWidget>
      <SideWidget type={"right"}></SideWidget>
      <div className="content-container">
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
      </div>
    </div>
  );
}

export default App;
