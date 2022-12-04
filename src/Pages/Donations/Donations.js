import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import DonationRow from "./DonationRow";

const Donations = () => {
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch(`https://sdp-2-server.vercel.app/donations?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure ,you want to cancel this order"
    );
    if (proceed) {
      fetch(`https://sdp-2-server.vercel.app/donations/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("successfully deleted");
            const remaining = donations.filter((don) => don._id !== id);
            setDonations(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://sdp-2-server.vercel.app/donations/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = donations.filter((odr) => odr._id !== id);
          const approving = donations.find((odr) => odr._id === id);
          approving.status = "Confirm";

          const newOrders = [approving, ...remaining];
          setDonations(newOrders);
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl">your have {donations.length} donator</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Message</th>
              {/* <th>Admin</th>
              <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <DonationRow
                key={donation._id}
                donation={donation}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              ></DonationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Donations;
