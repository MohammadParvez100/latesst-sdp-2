import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Headline from "../Headline/Headline";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Headline></Headline>
      <Banner></Banner>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default Home;
