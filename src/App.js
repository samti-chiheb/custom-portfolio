import React from "react";
import { About, Header, Skills, Testimonial, Work, Contact } from "./container";
import { Navbar, Footer } from "./components";
import { NavigationDots, SocialMedia } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Contact />
      <Footer />
      <NavigationDots />
      <SocialMedia />
    </div>
  );
};

export default App;