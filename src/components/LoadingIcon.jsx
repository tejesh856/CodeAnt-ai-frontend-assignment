import React from "react";

function LoadingIcon() {
  return (
    <div className="relative w-14 h-14">
      <div className="absolute inset-0 rounded-full border-4 border-gray-800 opacity-20"></div>
      <div className="absolute inset-0 rounded-full border-4 border-gray-700 border-t-transparent animate-spin"></div>
    </div>
  );
}

export default LoadingIcon;
