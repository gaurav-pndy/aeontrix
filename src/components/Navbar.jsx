import React from "react";
import { Link } from "react-router-dom";

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

        <a href="http://cal.com/aeontrix-ai/ai-audit" target="_blank">
          <button className="glow-button bg-spring hover:bg-spring/90 text-black border border-spring/30 hover:border-spring px-5 md:px-6 py-2 md:py-3 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <span className="relative z-10">Book an AI Audit</span>
            <span className="cursor-glow "></span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
