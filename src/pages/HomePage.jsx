import React, { useEffect, useRef, useState } from "react";
import HeroSection from "../components/HeroSection";

function HomePage() {
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
    <div>
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

export default HomePage;
