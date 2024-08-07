import React from "react";
import { logo, profileImage } from "../../assets";
import SearchBar from "../SearchBar";
import ProfileView from "../ProfileView";
import Notification from "../Notification";
import MenuButton from "../MenuButton";
import routes from "../../routers/routes";
import Button from "./Button";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isOpen = useSelector(state=>state.navbar.isOpen)
  return (
    <>
      <div className="w-full fixed top-0 h-14 border-b flex justify-between items-center px-10 bg-white z-50">
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
      <div className={`fixed z-50 bg-white w-full h-full top-14 pt-5 px-3 ${!isOpen&&"hidden"}`}>
        {routes.map(e=>(
          <Button name={e.name} path={e.path} key={e.key} />
        ))}
      </div>
    </>
  );
};

export default Navbar;
