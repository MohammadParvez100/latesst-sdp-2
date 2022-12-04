import React, { useEffect, useState } from "react";

const DonationRow = ({ donation, handleDelete, handleStatusUpdate }) => {
  const { _id, message, phone, serviceName, email, service, status } = donation;
  const [donationService, setDonationService] = useState({});

  useEffect(() => {
    fetch(`https://sdp-2-server.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setDonationService(data));
  }, [service]);

  // const handleMakeAdmin = (id) => {
  //   fetch(`https://sdp-2-server.vercel.app/donation/adimin/${id}`, {
  //     method: "PUT",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            Delete
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {donationService?.picture && (
                <img
                  src={donationService.picture}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">{message}</div>
          </div>
        </div>
      </td>
      <td>
        {email}
        {/* <button
          onClick={() => handleMakeAdmin(donation._id)}
          className="btn btn-xs btn-primary"
        >
          Make Admin
        </button> */}
        <br />
      </td>
      <td>{phone}</td>
      <th>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-ghost btn-xs #22c55e"
        >
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default DonationRow;
