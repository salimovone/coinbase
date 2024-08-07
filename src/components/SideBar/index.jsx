import React from "react";
import NavbarItem from "../NavbarItem";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../../routers/routes";


const SideBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="w-full h-full border-r pr-4 pt-10">
      {data.map((itm) => (
        <React.Fragment key={itm.key}>
          <NavbarItem
            icon={itm.icon}
            title={itm.name}
            isActive={location.pathname === itm.path}
            onClick={()=>navigate(itm.path)}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideBar;
