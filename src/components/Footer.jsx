import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollWithOffset = (el, offset = 100) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleClick = (targetId) => {
    if (location.pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) scrollWithOffset(el, 100); // 100px from top
    } else {
      navigate("/", { state: { scrollTo: targetId } });
    }
  };

  return (
    <footer className="bg-black relative text-[#F8F9FB]/70 text-sm pt-16 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_0.8fr] gap-8 border-b border-[#F8F9FB]/20 pb-10">
        {/* Logo + CTA */}
        <div>
          <img src="/logo-light.png" alt="logo" className="w-52" />
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold text-base text-white mb-5">Products</h3>
          <ul className="space-y-3">
            {[
              { label: "Consultation – AI Advisor", id: "consultation" },
              { label: "Done & Built For You", id: "built-for-you" },
              { label: "AI Partner (All your AI needs)", id: "ai-partner" },
            ].map((item) => (
              <li
                className="hover:text-[#00FF93] transition-colors duration-200 cursor-pointer"
                onClick={() => handleClick(item.id)}
                key={item.id}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-white text-base mb-5">Resources</h3>
          <ul className="space-y-3">
            <li
              onClick={() => handleClick("generate-plan")}
              className="hover:text-[#00FF93] transition-colors duration-200 cursor-pointer"
            >
              Free AI Plan Generator{" "}
            </li>
            {["Case Studies", "Blogs"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-[#00FF93] transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold text-white text-base mb-5">Connect</h3>
          <ul className="space-y-3 mb-4">
            <li>
              <p
                onClick={() => handleClick("Contact")}
                className="hover:text-[#00FF93] transition-colors duration-200 cursor-pointer"
              >
                Contact Us{" "}
              </p>
            </li>
            <li>
              <a
                href="https://cal.com/aeontrix-ai/aeontrix-discovery"
                target="_blank"
                className="hover:text-[#00FF93] transition-colors duration-200"
              >
                Book a Call{" "}
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 text-lg">
            <a
              href="https://x.com/AeontrixAI"
              target="_blank"
              className="hover:text-[#00FF93]"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/company/aeontrix"
              target="_blank"
              className="hover:text-[#00FF93]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/aeontrixai/"
              target="_blank"
              className="hover:text-[#00FF93]"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col max-w-7xl mx-auto md:flex-row justify-between items-center text-[#F8F9FB]/40 pt-6 text-xs gap-2">
        <span>© 2025 Aeontrix AI. All rights reserved.</span>
        <div className="flex gap-4">
          <a
            href="/privacy-policy"
            target="_blank"
            className="hover:text-[#00FF93]"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            target="_blank"
            className="hover:text-[#00FF93]"
          >
            Terms of Service
          </a>
          <a
            href="/refund-policy"
            target="_blank"
            className="hover:text-[#00FF93]"
          >
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
