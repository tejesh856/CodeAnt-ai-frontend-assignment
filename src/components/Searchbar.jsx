import React from "react";
import { IoSearch } from "react-icons/io5";

const Searchbar = ({
  placeholder = "Search...",
  onChange = () => {},
  searchValue,
  setsearchValue,
}) => {
  return (
    <div className="relative w-full max-w-xs">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <IoSearch size={18} color="#414651" />
      </div>
      <input
        type="text"
        className="w-full py-2 pl-10 pr-4 text-sm text-gray-800 font-normal bg-white border border-gray-400/80 rounded-lg focus:ring-1 focus:ring-gray-600/50 focus:border-gray-600/50 outline-none"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => {
          setsearchValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Searchbar;
