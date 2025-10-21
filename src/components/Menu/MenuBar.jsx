import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button.jsx";

const MenuBar = ({ setMenuOpen }) => {
  const menuComponents = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div className="flex flex-col items-start gap-5 bg-[#202223] p-5 rounded-lg shadow-md w-[30vh] pt-20 fixed right-5 top-15">
      {menuComponents.map((component, index) => {
        return (
          <NavLink
            key={index}
            to={component.path}
            onClick={() => setMenuOpen && setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "px-5 py-2 rounded-lg text-blue-500 underline font-semibold w-full"
                : "px-5 py-2 rounded-lg text-white hover:bg-blue-100 transition-colors w-full"
            }
          >
            {component.title}
          </NavLink>
        );
      })}
      <div className="w-full" onClick={() => setMenuOpen && setMenuOpen(false)}>
        <Button title={"Contact Us"} navigateTo={"/contact"} />
      </div>
    </div>
  );
};

export default MenuBar;
