import React from "react";
import Icon from "./Icon";
import "./css/Profile.css";
import profilePicture from "../assets/images/profiles.jpg"; // Naik satu level ke src

const Profile = () => {
  return (
    <div>
      <div className="profile">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <Icon />
      </div>
    </div>
  );
};

export default Profile;
