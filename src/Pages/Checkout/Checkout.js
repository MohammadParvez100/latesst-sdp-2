import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Checkout = () => {
  const { _id, name } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleDonate = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = `${form.name.value} ${form.address.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;
    const donation = {
      service: _id,
      serviceName: name,
      donator: name,
      email,
      phone,
      message,
    };

    fetch("https://sdp-2-server.vercel.app/donations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(donation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("donation placed successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <form onSubmit={handleDonate}>
        <h2 className="text-2xl text-fuchsia-600 ">
          Fill this form, our team will collect your Donation or Wastage from
          your place
        </h2>
        <h2 className="text-4xl text-green-600">{name}:</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="fullName"
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered w-full "
          />
          <input
            name="address"
            type="text"
            placeholder="Enter Your address"
            className="input input-bordered w-full"
          />
          <input
            name="phone"
            type="text"
            placeholder="Enter Your Phone"
            className="input input-bordered w-full"
            required
          />
          <input
            name="email"
            type="text"
            placeholder="Enter Your Email"
            defaultValue={user?.email}
            className="input input-bordered w-full"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full my-4"
          placeholder="Your Message"
          required
        ></textarea>
        <input className="btn" type="submit" value="Submit Details" />
      </form>
    </div>
  );
};
export default Checkout;
