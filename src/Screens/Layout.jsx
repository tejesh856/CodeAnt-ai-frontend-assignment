// Layout.js
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

function Layout({ setIsLoggedIn }) {
  const [selectedValue, setselectedValue] = useState("tejesh856");
  const [isVisibledropdown, setisVisibledropdown] = useState(false);
  return (
    <div className="flex h-full w-full">
      <motion.div
        initial={{ opacity: 0, x: -220 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={`fixed h-full max-880:top-0 max-880:left-0 max-880:w-full ${
          isVisibledropdown ? "max-880:bg-black/50 max-880:z-50" : ""
        }`}
      >
        <Sidebar
          setisVisibledropdown={setisVisibledropdown}
          isVisibledropdown={isVisibledropdown}
          setIsLoggedIn={setIsLoggedIn}
          selectedValue={selectedValue}
          setselectedValue={setselectedValue}
        />
      </motion.div>
      <div className="flex-1 flex flex-col ml-56 max-880:ml-0">
        <Outlet context={{ selectedValue, isVisibledropdown }} />
      </div>
    </div>
  );
}

export default Layout;
