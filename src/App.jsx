import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
