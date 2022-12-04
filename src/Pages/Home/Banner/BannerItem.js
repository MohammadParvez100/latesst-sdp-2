import React from "react";
import "./Banner.css";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/3">
        <h1 className="text-4xl font-bold text-white">
          Alone we can do little,
          <br></br>
          together we can do so much
          <br></br>
          <br></br>
          We <span className="text-blue-400">KHAN FOUNDATION</span>
          <br></br>
          manage wastage for needy peoples
        </h1>
      </div>
      {/* <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-20 top-1/2">
        <p className=" text-xl text-white ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quia
          magnam numquam dolores expedita exercitationem. Sint doloribus
          deleniti commodi quasi.
        </p>
      </div> */}
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
