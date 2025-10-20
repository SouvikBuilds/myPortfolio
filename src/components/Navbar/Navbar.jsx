import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const linkItems = [
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

  const navigate = useNavigate();
  return (
    <div className="flex flex-row fixed z-50 items-center justify-between bg-white shadow  w-full max-w-full px-5 py-2">
      <div className="logo p-0 m-0">
        <img
          src={logo}
          alt="logo"
          className="w-[100px] cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div>
        <ul className="flex flex-row items-center gap-6">
          {linkItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 cursor-pointer duration-200 text-base font-semibold border-b-2 border-blue-500"
                      : "text-black text-base hover:text-blue-400 transition-colors"
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <Button title={"Contact Us"} navigateTo={"/contact"} />
      </div>
    </div>
  );
};

export default Navbar;
