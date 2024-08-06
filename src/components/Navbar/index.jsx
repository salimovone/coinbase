import React from "react";
import { logo, profileImage } from "../../assets";
import SearchBar from "../SearchBar";
import ProfileView from "../ProfileView";
import Notification from "../Notification";
import MenuButton from "../MenuButton";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 h-14 border-b flex justify-between items-center px-10">
      <span>
        <img src={logo} className="h-5" alt="" />
      </span>

      <div className="flex items-center gap-5">
        <SearchBar />
        <ProfileView fullName={"Roman Ridwan"} img={profileImage} />
        <Notification number={5} />
        <MenuButton className={"MenuButton"} />
      </div>
    </div>
  );
};

export default Navbar;
