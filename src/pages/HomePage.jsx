import React from "react";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import Section from "../components/Section";
import RandomBooks from "../components/RandomBooks";

const HomePage = () => {
  return (
    <>
      <MainSection />
      <RandomBooks />
      <Section />
      <Footer />
    </>
  );
};

export default HomePage;
