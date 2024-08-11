import { BsCamera } from "react-icons/bs";
import React from "react";
import { profileImage } from "../../assets";

const Avatar = ({name, img}) => {
  return (
    <div className="">
      <div
        className="Avatar w-28 h-28 rounded-full overflow-hidden transition-all"
        style={{
          // backgroundImage: `url(${img})`,
          backgroundImage: `url(${profileImage})`, //delete after crud
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* overlay */}
        <div className="hidden w-full h-full bg-[#0004] justify-center items-center text-white cursor-pointer text-4xl text-center relative">
          <BsCamera />
          <div className="absolute bottom-0 w-full  text-lg bg-[#0007]">
            edit
          </div>
        </div>
      </div>
      {/* <p className="text-center text-Secondary leading-9 font-semibold">{name}</p> */}
      <p className="text-center text-Secondary leading-9 font-semibold">Raman  Ridwan</p> {/* delete after crud*/}
    </div>
  );
};

export default Avatar;  
