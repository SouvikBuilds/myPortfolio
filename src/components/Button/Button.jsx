import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ title, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <button
      className={`w-full px-5 py-2 rounded-lg bg-blue-500 text-white cursor-pointer active:bg-blue-600 duration-200 transition-all ease-in-out`}
      onClick={() => navigate(navigateTo)}
    >
      {title}
    </button>
  );
};

export default Button;
