import React, { useEffect, useState } from "react";
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
      gridOverlay.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(0, 255, 147, 0.12) 0%, transparent 40%)`;
      lastMouseEvent = e;
    }

    function onScroll() {
      if (lastMouseEvent) {
        updateCursorLight(lastMouseEvent);
      }
    }

    function createSparkle(button) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      const rect = button.getBoundingClientRect();
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;
      sparkle.style.left = x + "px";
      sparkle.style.top = y + "px";
      button.appendChild(sparkle);
      // setTimeout(() => sparkle.remove(), 1000);
    }

    function attachSparkles() {
      const sparkleButtons = document.querySelectorAll(".sparkle-button");
      sparkleButtons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          for (let i = 0; i < 3; i++) {
            setTimeout(() => createSparkle(button), i * 100);
          }
        });
        button.addEventListener("click", () => {
          for (let i = 0; i < 6; i++) {
            setTimeout(() => createSparkle(button), i * 50);
          }
        });
      });
    }

    document.addEventListener("mousemove", updateCursorLight);
    document.addEventListener("scroll", onScroll);
    attachSparkles();

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", updateCursorLight);
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(17,17,17)] relative overflow-hidden">
      <div className="absolute inset-0 grid-background">
        <div className="grid-overlay"></div>
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
