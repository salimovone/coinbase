import { AiOutlineDashboard } from "react-icons/ai";

function NavbarItem({
  icon = <AiOutlineDashboard />,
  title,
  isActive = 0,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`flex my-1 cursor-pointer ${
        isActive
          ? "text-Light bg-gradient-to-b from-[#ec6d9f] to-[#753ab8]"
          : "hover:text-Light hover:bg-gradient-to-b from-[#ec6d9f] to-[#753ab8] text-[#858585] bg-white"
      } w-full px-1  items-center py-4 rounded-e-full transition-all duration-700 font-poppins`}
    >
      <div className="flex justify-center w-[30%] text-sm">{icon}</div>
      <div className="w-[70%] text-sm text-left">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default NavbarItem;
