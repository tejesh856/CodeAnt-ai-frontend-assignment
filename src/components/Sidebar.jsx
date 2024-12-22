import React from "react";
import { ReactComponent as Logo } from "../../src/assets/Subtract.svg";
import Dropdown from "./Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { CiCloudOn } from "react-icons/ci";
import { PiNewspaperBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

function Sidebar({
  selectedValue,
  setselectedValue,
  setIsLoggedIn,
  isVisibledropdown,
  setisVisibledropdown,
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <div
      className={`${
        isVisibledropdown ? "max-880:h-auto" : "max-880:h-14"
      } h-full transition-all duration-300 ease-in-out bg-white fixed top-0 left-0 py-4 px-4 gap-4 max-880:w-full max-880:overflow-y-hidden  z-50 flex flex-col border-r-[1px] border-gray-300 shadow-sm`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between w-full">
          <p className="flex items-center gap-2">
            <Logo height={20} width={20} color="#081735" />
            <span className="text-indigo-950 text-xl font-normal">
              CodeAnt AI
            </span>
          </p>
          {isVisibledropdown ? (
            <FaXmark
              className=" min-880:hidden cursor-pointer"
              onClick={() => setisVisibledropdown(false)}
              size={20}
              color="#181D27"
            />
          ) : (
            <GiHamburgerMenu
              className="min-880:hidden cursor-pointer"
              onClick={() => setisVisibledropdown(true)}
              size={20}
              color="#181D27"
            />
          )}
        </div>
        <Dropdown
          setselectedValue={setselectedValue}
          selectedValue={selectedValue}
        />
      </div>
      <div className="flex-1 flex flex-col">
        <ul className="flex-1 flex flex-col items-start">
          <li
            className=" w-full mb-2 bg-blue-500 max-880:bg-transparent
          max-880:rounded-none  rounded-lg flex"
          >
            <Link className="py-2 px-4 w-full font-medium max-880:font-normal text-white max-880:text-gray-800 flex  justify-start gap-2">
              <MdOutlineHome
                size={20}
                color={isVisibledropdown ? "#414651" : "white"}
              />
              Repositories
            </Link>
          </li>
          <li className=" w-full flex mb-2">
            <Link className="py-2 px-4 w-full font-normal text-gray-800 flex items-start justify-start gap-2">
              <FaCode size={20} color="#414651" />
              AI Code Review
            </Link>
          </li>
          <li className=" w-full flex mb-2">
            <Link className="py-2 px-4 w-full font-normal text-gray-800 flex items-start justify-start gap-2">
              <CiCloudOn size={20} color="#414651" />
              Cloud Security
            </Link>
          </li>
          <li className=" w-full flex mb-2">
            <Link className="py-2 px-4 w-full font-normal text-center text-gray-800 flex items-center justify-start gap-2">
              <PiNewspaperBold size={20} color="#414651" />
              How To Use
            </Link>
          </li>
          <li className=" w-full flex items-start flex-1 max-880:mb-2  max-880:flex-none">
            <Link className="py-2 px-4 w-full font-normal text-center text-gray-800 flex items-center justify-start gap-2">
              <IoSettingsOutline size={20} color="#414651" />
              Settings
            </Link>
          </li>
          <li className=" w-full flex mb-2">
            <Link className="py-2 px-4 w-full font-normal text-center text-gray-800 flex items-center justify-start gap-2">
              <BsTelephone size={20} color="#414651" />
              Support
            </Link>
          </li>
          <li className=" w-full flex">
            <Link
              onClick={handleLogout}
              className="py-2 px-4 w-full font-normal text-center text-gray-800 flex items-center justify-start gap-2"
            >
              <IoIosLogOut size={20} color="#414651" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
