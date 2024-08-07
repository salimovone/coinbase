import React, { useState } from "react";
import data from "./data";
import NavbarItem from "../NavbarItem";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate()

  const clickItem = (id, path) => {
    setActive(id)
    navigate(path)
  }
  return (
    <div className="w-full h-full border-r pr-4 pt-10">
      {data.map((itm) => (
        <React.Fragment key={itm.id}>
          <NavbarItem
            icon={itm.icon}
            title={itm.name}
            isActive={active === itm.id}
            onClick={() => clickItem(itm.id, itm.path)}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideBar;
