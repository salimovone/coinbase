import { MdDownloadDone } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { AiFillEdit } from "react-icons/ai";
import React, { useState } from "react";

const Editable = ({ name, value, func, disabled, url }) => {
  const [inEdit, setInEdit] = useState(false);
  const [inpValue, setInpValue] = useState(value);

  const cancel = () => {
    setInpValue(value);
    setInEdit(false);
  };

  const done = () => {
    func(inpValue)
    setInEdit(false);
  };
  return (
    <div className="w-full flex mt-5">
      <div className="w-1/4 pl-20">
        <span>{name}</span>
      </div>
      <div className="w-1/2">
        <input
          type="text"
          value={inpValue}
          disabled={!inEdit}
          onChange={(e) => setInpValue(e.target.value)}
          className={`${
            inEdit && "border"
          } outline-none rounded-full ml-2 pl-2 bg-white`}
        />
      </div>
      <div className={`${disabled && "opacity-50"} flex gap-4`}>
        <button
          disabled={disabled}
          className={`${inEdit && "hidden"}`}
          onClick={() => setInEdit(true)}
        >
          <AiFillEdit />
        </button>
        <button
          className={`${!inEdit && "hidden"} text-red-700`}
          onClick={cancel}
        >
          <ImCancelCircle />
        </button>
        <button className={`${!inEdit && "hidden"}`} onClick={done}>
          <MdDownloadDone />
        </button>
      </div>
    </div>
  );
};

export default Editable;
