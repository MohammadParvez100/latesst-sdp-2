import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then().catch();
  };

  const menuItem = (
    <>
      <li className="font-bold text-blue-700 ">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold text-blue-700 ">
        <Link to="/blog">Blog</Link>
      </li>
      {/* <li className="font-bold text-blue-700">
        <Link to="/volunteer">Volunteer-Registration</Link>
      </li> */}
      <li className="font-bold text-blue-700">
        <Link to="/gallery">Gallery</Link>
      </li>

      {user?.email ? (
        <>
          {" "}
          <li className="font-old text-blue-700">
            <Link to="/donations">Donations</Link>
          </li>{" "}
          <li className="font-bold text-blue-700">
            <button onClick={handleLogOut} className="btn-ghost">
              Sign Out
            </button>
          </li>{" "}
        </>
      ) : (
        <li className="font-bold text-blue-700">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-green-600">
      <div className="navbar h-20 mb-12 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 btn btn-active btn-secondary w-52"
            >
              {menuItem}
            </ul>
          </div>
          <a className="btn btn-#e11d48" text-red-500 text-5xl>
            KHAN FOUNDATION
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItem}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-active btn-secondary">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
