import React from "react";
import "./topbar.css";
import { NavLink } from "react-router-dom";

export default function TopBar() {
  //creating a sudo user

  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcon fa-brands fa-square-facebook"></i>
        <i className=" topIcon fa-brands fa-square-twitter"></i>
        <i className=" topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <NavLink to="/" className="link">
              HOME
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink to="/about" className="link">
              ABOUT
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink to="/contact" className="link">
              CONTACT
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink to="/write" className="link">
              WRITE
            </NavLink>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1934234/pexels-photo-1934234.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="no pic"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <NavLink to="/login" className="link">
                LOGIN
              </NavLink>
            </li>
            <li className="topListItem">
              <NavLink to="/register" className="link">
                REGISTER
              </NavLink>
            </li>
          </ul>
        )}

        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
