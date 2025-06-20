import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-[20px] left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[95%] flex justify-center">
      <div
        className="backdrop-blur-lg bg-white/10 
                   shadow-lg rounded-full px-6 py-2 flex items-center justify-between 
                   gap-6 w-full max-w-[700px] flex-wrap"
      >
        {/* Left nav items (if any) */}

        {/* Center logo */}
        <div className="font-bold text-white text-base whitespace-nowrap">
          Logo
        </div>

        {/* Right CTA */}
        <button
          style={{ borderRadius: "10rem" }}
          className="bg-[#03624C] hover:bg-[#024c3a]   
                     text-white font-semibold text-base py-2 px-8 
                     whitespace-nowrap transition-all duration-300"
        >
          Book an AI Audit
        </button>
      </div>
    </div>
  );
};

export default Navbar;
