import React from "react";

const Header = () => {
  return (
    <div
      className="flex justify-between items-center bg-purple-700
     text-white/80 px-6 py-4 text-lg"
    >
      <div>Logo</div>
      <div>
        <ul className="flex items-center gap-3 cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
