import React, { useEffect, useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import BusinessImpactSection from "./components/BusinessImpactSection";
import ServicesSection from "./components/ServicesSection";
import "bootstrap/dist/css/bootstrap.min.css";
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

  return (
    <div className="app">
      {/* Hero Section with Matrix Rain and Spline Robot */}
      <Navbar />
      <HeroSection />
      {/* Business Impact Section */}
      <BusinessImpactSection />

      {/* Services Section */}
      <ServicesSection />

      <GenerateAI />
      <AIImplementationTimeline />
      <CaseStudies />
    </div>
  );
}

export default App;
