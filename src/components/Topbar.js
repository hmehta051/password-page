import React from "react";
import "../styles/Topbar.css";
import { ReactComponent as Profile } from "../assets/svg/Profile.svg";
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topWrapper">
        <div className="searchBox">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M15.9223 17.144L10.4432 11.6649C10.0265 12.026 9.54066 12.3072 8.98568 12.5086C8.43069 12.71 7.84013 12.8107 7.21399 12.8107C5.71174 12.8107 4.44034 12.2899 3.3998 11.2482C2.35926 10.2065 1.83899 8.9496 1.83899 7.47738C1.83899 6.00515 2.35982 4.74821 3.40149 3.70654C4.44316 2.66488 5.70357 2.14404 7.18274 2.14404C8.66191 2.14404 9.91885 2.66488 10.9536 3.70654C11.9883 4.74821 12.5057 6.0062 12.5057 7.4805C12.5057 8.07564 12.4084 8.65099 12.214 9.20654C12.0195 9.7621 11.7279 10.2829 11.339 10.769L16.839 16.2274L15.9223 17.144ZM7.19316 11.5607C8.32163 11.5607 9.28083 11.1614 10.0708 10.3628C10.8607 9.56418 11.2557 8.60238 11.2557 7.47738C11.2557 6.35238 10.8607 5.39057 10.0708 4.59196C9.28083 3.79335 8.32163 3.39404 7.19316 3.39404C6.05311 3.39404 5.08407 3.79335 4.28603 4.59196C3.488 5.39057 3.08899 6.35238 3.08899 7.47738C3.08899 8.60238 3.488 9.56418 4.28603 10.3628C5.08407 11.1614 6.05311 11.5607 7.19316 11.5607Z"
                fill="#606060"
              />
            </svg>
          </div>
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <Profile style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
