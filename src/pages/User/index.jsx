import React from "react";
import Avatar from "../../components/Avatar";
import Editable from "../../components/Editable";

const User = () => {
  const data = [
    {
      id: 1,
      name: "ismi:",
      value: "Roman Ridwan",
      disabled: false,
      url: "", //post sorovi jonatilishi uchun :)
    },
    {
      id: 2,
      name: "email:",
      value: "johndoe@gmail.com",
      disabled: true,
      url: "", //post sorovi jonatilishi uchun :)
    },
    {
      id: 3,
      name: "telefon raqam:",
      value: "+998946782301",
      disabled: true,
      url: "", //post sorovi jonatilishi uchun :)
    },
  ];
  return (
    <div className="w-full h-full bg-[#fff9fe] pt-5 px-10">
      <div className="w-full flex justify-between items-center text-Secondary text-sm">
        <span className="font-bold">User management Profile</span>
        <span>Accounts | Ramon Ridwan</span>
      </div>

      <div className="bg-white border mt-5 w-full rounded-2xl px-4 py-8">
        <div className="w-full flex justify-center px-5">
          <Avatar />
        </div>
        <div className="w-full mt-10">
          {data.map((itm) => (
            <Editable
              {...itm}
              key={itm.id}
              func={(e) => {
                console.log(e);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
