import React from "react";

const ServiceCard = ({ service }) => {
  const { picture, name, about } = service;
  return (
    <div className="card w-70 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{about}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Donate Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
