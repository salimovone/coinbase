import { AiOutlineDashboard } from "react-icons/ai";

function NavbarItem({ icon = <AiOutlineDashboard />, title, isActive = 0 }) {
  return (
    <div
      className={`flex ${
        isActive
          ? "text-Light bg-gradient-to-b from-[#ec6d9f] to-[#753ab8]"
          : "hover:text-Light hover:bg-gradient-to-b from-[#ec6d9f] to-[#753ab8] text-[#858585] bg-white"
      } w-full px-1  items-center py-4 rounded-e-full transition-all duration-700 font-poppins`}
    >
      <div className="flex justify-center w-[30%] text-4xl">{icon}</div>
      <div className="w-[70%] text-xl text-left">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default NavbarItem;