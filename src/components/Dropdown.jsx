import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Dropdown({ selectedValue, setselectedValue }) {
  const [dropdownState, setDropdownState] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownState((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setDropdownState(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleItemClick = (value) => {
    setselectedValue(value);
    setDropdownState(false);
  };

  const MenuList = [{ label: "Tejesh Reddy", value: "tejesh856" }];

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className={`px-4 py-1 border border-gray-400/80 rounded w-48 max-880:w-full flex justify-between items-center`}
      >
        <span className="text-gray-700">
          {selectedValue
            ? MenuList.find((item) => item.value === selectedValue).label
            : "Select an Github User"}
        </span>
        {dropdownState ? (
          <FaChevronUp size={10} color="#181D27" />
        ) : (
          <FaChevronDown size={10} color="#181D27" />
        )}
      </button>
      {dropdownState && (
        <ul
          ref={dropdownRef}
          className="absolute border border-t-0 w-full bg-white shadow-lg"
        >
          {MenuList.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-200 text-gray-800 cursor-pointer"
              onClick={() => handleItemClick(item.value)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
