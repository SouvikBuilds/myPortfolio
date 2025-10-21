import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MenuBar from "../Menu/MenuBar.jsx";

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
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="flex flex-row fixed z-50 items-center justify-between  shadow  w-full max-w-full px-5 py-2 bg-[#333] ">
        <div className="logo p-0 m-0">
          <img
            src={logo}
            alt="logo"
            className="w-[100px] cursor-pointer invert"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="hidden md:flex flex-row items-center gap-6">
            {linkItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500 cursor-pointer duration-200 text-base font-semibold border-b-2 border-blue-500"
                        : "text-white text-base hover:text-blue-400 transition-colors"
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:block">
          <Button title={"Contact Me"} navigateTo={"/contact"} />
        </div>
        <div className="md:hidden">
          <button
            onClick={(prev) => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-blue-500 transition-colors"
          >
            {menuOpen ? (
              <X size={28} className="text-blue-500" />
            ) : (
              <Menu size={28} className="text-blue-500" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed top-[60px] right-5 z-40 md:hidden">
          <MenuBar setMenuOpen={setMenuOpen} />
        </div>
      )}
    </>
  );
};

export default Navbar;
