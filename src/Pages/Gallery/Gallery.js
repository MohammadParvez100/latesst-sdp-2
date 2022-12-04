import React from "react";
import Headline from "../Home/Headline/Headline";

const Gallery = () => {
  return (
    <div>
      <Headline></Headline>
      <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-normal font-bold text-white bg-red-500 py-2 px-4 my-4 shadow-lg shadow-slate-500 rounded w-1/3 text-center mx-auto">
        Gallery
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 px-3">
        <figure>
          <img
            src="https://plus.unsplash.com/premium_photo-1661775317533-2163ba4dbc93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
            alt="Shoes"
          />
        </figure>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Shoes"
          />
        </figure>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Shoes"
          />
        </figure>
        <figure>
          <img src="https://i.ibb.co/qpZzBs2/3.jpg" alt="Shoes" />
        </figure>
        <figure>
          <img src="https://i.ibb.co/hC73LDf/4.jpg" alt="Shoes" />
        </figure>
        <figure>
          <img src="https://i.ibb.co/j3ggd9f/2.jpg" alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default Gallery;
