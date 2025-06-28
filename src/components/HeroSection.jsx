import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.querySelectorAll(".content-box").forEach((box) => {
      const border = box.querySelector(".border-glow");

      const handleMouseMove = (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        console.log("Mouse position:", x, y);

        border.style.setProperty("--x", `${x}px`);
        border.style.setProperty("--y", `${y}px`);
      };

      const handleMouseLeave = () => {
        border.style.setProperty("--x", `-200px`);
        border.style.setProperty("--y", `-200px`);
      };

      box.addEventListener("mousemove", handleMouseMove);
      box.addEventListener("mouseleave", handleMouseLeave);
    });
  }, [isSubmitted]);

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-24">
      {/* Top Text */}
      <div className="flex justify-center mb-8">
        <div className="green-glass-badge backdrop-blur-md rounded-full px-6 py-2 shadow-lg">
          <span className="text-[#00FF93] font-medium">
            Your AI Transformation Partner
          </span>
        </div>
      </div>

      {/* Hero Heading */}
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-7xl font-bold text-[#F8F9FB] mb-6">
          Transform Your <span className="shiny-text">Workforce</span>
          <br />
          with <span className="shiny-text">AI Systems</span>
        </h1>
        <p className="text-xl text-[#F8F9FB]/80 max-w-3xl mx-auto leading-relaxed">
          Revolutionize your business operations with intelligent AI solutions.
          We help companies upgrade their workforce capabilities and achieve
          unprecedented efficiency.
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mb-16">
        <a href="http://cal.com/aeontrix-ai/ai-audit" target="_blank">
          <button className="glow-button group bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 relative overflow-hidden flex items-center space-x-2">
            <span className="relative z-10">Start Your AI Journey</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
            <span className="cursor-glow"></span>
          </button>
        </a>
      </div>

      {/* Form Section */}
      {/* Form Section */}
      <div className="max-w-4xl mx-auto">
        {!isSubmitted ? (
          <div className="content-box highlighted-box bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-4 md:p-8 shadow-2xl transition-transform duration-500">
            <div className="inside-shadow"></div>
            <div className="border-glow"></div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-seasalt mb-4">
                Begin Your AI Workforce Transformation
              </h2>
              <p className="text-[#F8F9FB]/70 text-lg">
                Take the first step toward a more efficient, cost-effective
                workforce.
              </p>
            </div>

            {!showContactForm ? (
              <div>
                <label className="block text-seasalt font-semibold mb-3 text-lg">
                  Describe your business or Industry
                </label>
                <textarea
                  className="w-full h-52 md:h-40 bg-[#042222]/80 border border-[#03624C]/30 rounded-xl px-4 py-3 text-seasalt placeholder-[#F8F9FB]/40 focus:outline-none focus:border-[#00FF93] focus:ring-2 focus:ring-[#00FF93]/20 transition-all duration-300 resize-none"
                  placeholder='Prompt examples:
"I have a Dental Clinic in NYC"
"I run a real estate agency in Austin, Tx"
"I have an E-Commerce brand based in the US"
"My business is a Digital Marketing Agency"'
                ></textarea>

                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="glow-button bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-8 py-3 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  >
                    <span className="relative z-10">
                      Generate AI Workforce Plan
                    </span>
                    <span className="cursor-glow"></span>
                  </button>
                </div>
              </div>
            ) : (
              <AnimatePresence>
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, scale: "90%", filter: "blur(12px)" }}
                  animate={{ opacity: 1, scale: "100%", filter: "blur(0px)" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  {/* Name Field */}
                  <div>
                    <label className="block text-seasalt font-semibold mb-3 text-lg">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#042222]/80 border border-[#03624C]/30 rounded-xl px-4 py-3 text-seasalt placeholder-[#F8F9FB]/40 focus:outline-none focus:border-[#00FF93] focus:ring-2 focus:ring-[#00FF93]/20 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-seasalt font-semibold mb-3 text-lg">
                      Your E-mail
                    </label>
                    <input
                      type="email"
                      className="w-full bg-[#042222]/80 border border-[#03624C]/30 rounded-xl px-4 py-3 text-seasalt placeholder-[#F8F9FB]/40 focus:outline-none focus:border-[#00FF93] focus:ring-2 focus:ring-[#00FF93]/20 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      onClick={() => setIsSubmitted(true)}
                      className="glow-button bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-8 py-3 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 relative overflow-hidden"
                    >
                      <span className="relative z-10">Submit</span>
                      <span className="cursor-glow"></span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        ) : (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, scale: "90%", filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: "100%", filter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="content-box highlighted-box text-center rounded-3xl p-4 md:p-8 shadow-2xl transition-transform duration-500"
          >
            <div className="inside-shadow"></div>
            <div className="border-glow"></div>
            <h2 className="text-3xl mb-2 md:text-4xl font-bold text-[#00FF93]">
              Thank You!
            </h2>
            <p className="text-[#F8F9FB]/80 text-2xl">
              Your free guide is on its way to your inbox.
              <br />
              <span className="text-lg">
                (Check your spam folder just in case!)
              </span>
            </p>
            <br />
            <h3 className="text-2xl mt-4 font-semibold text-seasalt">
              Want to skip the queue?
            </h3>
            <p className="text-[#F8F9FB]/70 text-lg mt-2">
              Book a free, no-obligation call with us — we'll walk you through
              quick-win automation opportunities tailored to your business.
            </p>
            <div className="flex justify-center mt-8">
              <a
                href="http://cal.com/aeontrix-ai/ai-audit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="glow-button bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-8 py-3 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  <span className="relative z-10">Book a Call Now</span>
                  <span className="cursor-glow"></span>
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
