import React from "react";
import imgdontaion from "../../assets/images/about_us/donation.jpeg";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <img src={imgdontaion} alt="" className=" rounded-lg shadow-2xl" />
        </div>
        <div className="w-1/2">
          <p className="text-2xl text-orange-600 font-semibold ">About Us</p>
          <h1 my-5 className="text-5xl font-bold">
            What We Do & Why We Do
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
