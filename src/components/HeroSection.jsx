import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-24">
      <div className="flex justify-center mb-8">
        <div className="green-glass-badge backdrop-blur-md rounded-full px-6 py-2 shadow-lg">
          <span className="text-[#00FF93] font-medium">
            Your AI Transformation Partner
          </span>
        </div>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-7xl font-bold text-[#F8F9FB] mb-6 ">
          Transform Your
          <span className="shiny-text"> Workforce</span>
          <br />
          with <span className="shiny-text">AI Systems</span>
        </h1>
        <p className="text-xl text-[#F8F9FB]/80 max-w-3xl mx-auto leading-relaxed">
          Revolutionize your business operations with intelligent AI solutions.
          We help companies upgrade their workforce capabilities and achieve
          unprecedented efficiency.
        </p>
      </div>

      <div className="flex justify-center mb-16">
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
          <span class="cursor-glow "></span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="content-box highlighted-box bg-[#F8F9FB]/10 backdrop-blur-lg border border-[#F8F9FB]/20 rounded-3xl p-4 md:p-8 shadow-2xl">
          <div class="inside-shadow"></div>
          <div class="border-glow"></div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-seasalt mb-4">
              Begin Your AI Workforce Transformation
            </h2>
            <p className="text-[#F8F9FB]/70 text-lg">
              Take the first step toward a more efficient, cost-effective
              workforce. Tell us about your business goals and challenges.
            </p>
          </div>

          <div className="w-full">
            <label className="block text-seasalt font-semibold mb-3 text-lg">
              Describe your business or Industry
            </label>
            <textarea
              className="w-full h-52 md:h-40 bg-[#042222]/80 border border-[#03624C]/30 rounded-xl px-4 py-3 text-seasalt placeholder-[#F8F9FB]/40 focus:outline-none focus:border-[#00FF93] focus:ring-2 focus:ring-[#00FF93]/20 transition-all duration-300 resize-none"
              placeholder="Prompt examples:
I have a Dental Clinic in NYC
I run a real estate agency in Austin, Tx.
I have an E-Commerce brand based in the US.
My business is a Digital Marketing Agency."
            ></textarea>
          </div>

          <div className="flex justify-center mt-8">
            <button className="glow-button bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-8 py-3 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <span className="relative z-10">Generate AI Workforce Plan</span>
              <span class="cursor-glow "></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
