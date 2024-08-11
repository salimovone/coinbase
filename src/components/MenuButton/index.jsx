import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../redux/navbarSlice";

const MenuButton = ({className}) => {
  const dispatch = useDispatch()
  const isOpen = useSelector(state=>state.navbar.isOpen)
  const [opened, setOpened] = useState(isOpen)
  const click = () => {
    setOpened(!opened)
    dispatch(setIsOpen(opened))
  }
  return (
    <label onClick={click} className={className}>
      <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
        <input className="hidden peer" type="checkbox" checked={isOpen} />
        <div className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
        <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
        <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
      </div>
    </label>
  );
};

export default MenuButton;
