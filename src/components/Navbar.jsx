import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BookAuditButton from "./BookAuditButton";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollWithOffset = (el, offset = 100) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const solutions = [
    {
      id: "ai-sales-assistant",
      title: "AI Sales Assistant",
    },
    {
      id: "ai-influencer",
      title: "AI Influencer",
    },
    {
      id: "ai-marketing-suite",
      title: "AI Marketing Suite",
    },
    {
      id: "ai-clone",
      title: "AI Clone",
    },
    {
      id: "ai-customer-support",
      title: "AI Customer Support",
    },
    {
      id: "ai-business-partner",
      title: "AI Business Partner",
    },
  ];

  const goToPage = (pageId) => {
    navigate(`${pageId}`);
    setMobileMenuOpen(false);
  };
  const handleClick = (targetId) => {
    if (location.pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) scrollWithOffset(el, 100);
    } else {
      navigate("/", { state: { scrollTo: targetId } });
    }
  };

  return (
    <nav className="fixed max-w-[98vw] md:max-w-[90vw] w-full mx-auto top-1 md:top-3 rounded-full left-[50%] translate-x-[-50%] flex items-center h-16 z-50 backdrop-blur-lg bg-white/10 shadow-lg">
      <div className="mx-auto w-full flex items-center justify-between px-3 md:px-8">
        <Link to="/">
          <div className="flex z-20 items-center md:space-x-2">
            <div className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center">
              <img
                src="/Transparent Logo copy.png"
                alt="Aeontrix Logo"
                className="w-8 md:w-10 h-8 md:h-10 object-contain"
              />
            </div>
            <span className="text-[#F8F9FB] font-semibold text-lg md:text-xl">
              AEONTRIX <span className="text-[#00FF93]">AI</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex h-16 items-center space-x-6 xl:space-x-10 text-[#F8F9FB] font-medium">
          {/* Solutions */}
          <div
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative flex items-center h-full"
          >
            <div className="flex hover:text-[#00FF93] transition-all duration-200 items-center gap-1 cursor-pointer">
              Solutions <ChevronDown size={16} />
            </div>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "tween", duration: 0.12 }}
                  className="absolute top-full mt-1 left-[50%] translate-x-[-50%] bg-[#0F1114] border border-white/10 rounded-lg shadow-[#00FF93]/10 shadow  w-56 z-50"
                >
                  {solutions.map((item) => (
                    <Link to={`/solutions/${item.id}`} key={item.id}>
                      <button className="w-full text-left px-4 py-3 hover:text-[#00FF93] transition-all duration-200 hover:bg-[#1A1D21] text-white">
                        {item.title}
                      </button>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Use Cases */}
          <div
            onMouseEnter={() => setDropdownOpen2(true)}
            onMouseLeave={() => setDropdownOpen2(false)}
            className="relative flex items-center h-full"
          >
            <div className="flex items-center hover:text-[#00FF93] transition-all duration-200 gap-1 cursor-pointer">
              Use Cases <ChevronDown size={16} />
            </div>
            <AnimatePresence>
              {dropdownOpen2 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "tween", duration: 0.12 }}
                  className="absolute top-full mt-1 left-[50%] translate-x-[-50%] bg-[#0F1114] border border-white/10 rounded-lg shadow-[#00FF93]/10 shadow  w-56 z-50"
                >
                  {[
                    "E-commerce",
                    "Real Estate",
                    "Insurance",
                    "Law Firms",
                    "Coaches & Consultants",
                    "SaaS & Tech",
                    "Agencies",
                  ].map((item) => (
                    <button
                      key={item}
                      className="w-full text-left px-4 py-3 hover:bg-[#1A1D21] text-white hover:text-[#00FF93] transition-all duration-200"
                    >
                      {item}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            className="hover:text-[#00FF93] transition-all duration-200"
            to="/blogs"
          >
            Blogs
          </Link>
          <button
            className="hover:text-[#00FF93] transition-all duration-200 cursor-pointer"
            onClick={() => handleClick("pricing")}
          >
            Pricing
          </button>
          <button
            className="hover:text-[#00FF93] transition-all duration-200 cursor-pointer"
            onClick={() => handleClick("Contact")}
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex gap-6 items-center">
          <BookAuditButton className="!px-3 md:!px-6 !py-1.5 md:!py-2.5 text-[0.8rem] md:text-sm" />

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide In */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute rounded-3xl top-17 left-[50%] translate-x-[-50%] w-[98vw] md:max-w-[90vw] mx-auto  bg-[#042222] text-[#F8F9FB] shadow-md py-4 flex flex-col items-center space-y-6 text-lg lg:hidden z-50"
          >
            <div
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
                setDropdownOpen2(false);
              }}
              className="relative flex gap-2 flex-col items-center h-full"
            >
              <div className="flex  items-center gap-1 cursor-pointer">
                Solutions <ChevronDown size={16} />
              </div>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full bg-[#111111] py-1 text-sm overflow-hidden"
                  >
                    {solutions.map((item) => (
                      <button
                        onClick={() => goToPage(`/solutions/${item.id}`)}
                        className="w-full  px-4 py-3 hover:bg-[#1A1D21] text-white"
                      >
                        {item.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Use Cases */}
            <div
              onClick={() => {
                setDropdownOpen2(!dropdownOpen2);
                setDropdownOpen(false);
              }}
              className="relative flex gap-2 flex-col items-center h-full"
            >
              <div className="flex items-center gap-1 cursor-pointer">
                Use Cases <ChevronDown size={16} />
              </div>
              <AnimatePresence>
                {dropdownOpen2 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full bg-[#111111] py-1 text-sm overflow-hidden"
                  >
                    {[
                      "E-commerce",
                      "Real Estate",
                      "Insurance",
                      "Law Firms",
                      "Coaches & Consultants",
                      "SaaS & Tech",
                      "Agencies",
                    ].map((item) => (
                      <button
                        key={item}
                        className="w-full  px-4 py-3 hover:bg-[#1A1D21] text-white"
                      >
                        {item}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/blogs" onClick={() => setMobileMenuOpen(false)}>
              Blogs
            </Link>
            <button
              onClick={() => {
                handleClick("pricing");
                setMobileMenuOpen(false);
              }}
            >
              Pricing
            </button>
            <button
              onClick={() => {
                handleClick("Contact");
                setMobileMenuOpen(false);
              }}
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
