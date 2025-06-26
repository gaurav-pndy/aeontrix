import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import BusinessImpactSection from "./components/BusinessImpactSection";
import ServicesSection from "./components/ServicesSection";
import GenerateAI from "./components/GeneratAI";
import AIImplementationTimeline from "./components/AIImplementationTimeline";
import CaseStudies from "./components/CaseStudies";
import Navbar from "./components/Navbar";

function App() {
  const [activeSection, setActiveSection] = useState("main");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "main",
        "business",
        "services",
        "ai-plan",
        "case-studies",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const gridOverlay = document.querySelector(".grid-overlay");
    let lastMouseEvent = null;

    if (!gridOverlay) return;

    function updateCursorLight(e) {
      const x = e.clientX;
      const y = e.clientY;
      gridOverlay.style.background = `radial-gradient(350px circle at ${x}px ${y}px, rgba(0, 255, 147, 0.2) 0%, transparent 40%)`;
      lastMouseEvent = e;
    }

    function onScroll() {
      if (lastMouseEvent) {
        updateCursorLight(lastMouseEvent);
      }
    }

    const buttonListeners = [];

    function attachCursorGlow() {
      const buttons = document.querySelectorAll(".glow-button");

      buttons.forEach((button) => {
        const glow = button.querySelector(".cursor-glow");

        const handleMove = (e) => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          glow.style.left = `${x}px`;
          glow.style.top = `${y}px`;
          glow.style.opacity = "1";
        };

        const handleLeave = () => {
          glow.style.opacity = "0";
        };

        button.addEventListener("mousemove", handleMove);
        button.addEventListener("mouseleave", handleLeave);

        buttonListeners.push({ button, handleMove, handleLeave });
      });
    }

    attachCursorGlow();

    document.addEventListener("mousemove", updateCursorLight);
    document.addEventListener("scroll", onScroll);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", updateCursorLight);
      document.removeEventListener("scroll", onScroll);

      // In cleanup
      buttonListeners.forEach(({ button, handleMove, handleLeave }) => {
        button.removeEventListener("mousemove", handleMove);
        button.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  const boxRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    document.querySelectorAll(".content-box").forEach((box) => {
      const border = box.querySelector(".border-glow");

      const handleMouseMove = (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
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
  }, []);
  return (
    <div className="min-h-screen bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 grid-background">
        <div id="gridOverlay" className="grid-overlay"></div>
      </div>
      <Navbar />
      <HeroSection />
      {/* Business Impact Section */}
      {/* <BusinessImpactSection /> */}

      {/* Services Section */}
      {/* <ServicesSection /> */}

      {/* <GenerateAI /> */}
      {/* <AIImplementationTimeline /> */}
      {/* <CaseStudies /> */}
    </div>
  );
}

export default App;
