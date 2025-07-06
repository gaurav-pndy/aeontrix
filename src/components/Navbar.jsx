import React from "react";
import { Link } from "react-router-dom";
import BookAuditButton from "./BookAuditButton";

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className=" w-full  top-0  relative z-50  ">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-3 md:px-6 py-6">
        <Link to={"/"}>
          <div className="flex z-20 items-center md:space-x-2">
            <div className="w-9 md:w-10 h-9 md:h-10 flex items-center justify-center">
              <img
                src="/Transparent Logo copy.png"
                alt="Aeontrix Logo"
                className="w-9 md:w-10 h-9 md:h-10 object-contain "
              />
            </div>

            <span className="text-[#F8F9FB] font-semibold text-xl ">
              AEONTRIX <span className="text-spring">AI</span>
            </span>
          </div>
        </Link>

        <BookAuditButton className="px-4 md:px-6 py-1 md:py-3 text-sm md:text-base" />
      </div>
    </nav>
  );
};

export default Navbar;
