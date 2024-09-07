import React from "react";

const Header = () => {
  const navber = [{ title: "home" }, { title: "contact" }, { title: "about" }];
  return (
    <div>
      <div>
        <div>
          <h1>logo</h1>
        </div>
        <div style={{ display: "flex", gap: "4px ", padding: "20px" }}>
          {navber.map((item, index) => (
            <button style={{ background: "yellow", padding: "4px" }}>
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
