import React, { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import PentagonBox from "./PentagonBox";

const HeroSection = () => {
  useEffect(() => {
    const canvas = document.getElementById("Matrix");
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const section = document.getElementById("main");
    if (!section) return;

    // Set canvas size to match the section size
    const sectionRect = section.getBoundingClientRect();
    canvas.width = sectionRect.width;
    canvas.height = sectionRect.height;

    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const alphabet = latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#0F0";
      context.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length)
        );
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }

        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 30);

    const handleResize = () => {
      const updatedRect = section.getBoundingClientRect();
      canvas.width = updatedRect.width;
      canvas.height = updatedRect.height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="main"
      className="section main-section mt-40"
      style={{
        backgroundColor: "#000",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",

        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Matrix background - only for this section */}
      <div
        className="matrix-container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <canvas id="Matrix" />
      </div>

      <div className="" style={{ zIndex: 2 }}>
        <div className="hero-content">
          {/* <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('business')}>Learn More</button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>Get Started</button>
          </div> */}
        </div>
        <div className="hero-image">
          <Spline scene="https://prod.spline.design/MecWx3Jqtrzby4Di/scene.splinecode" />
        </div>

        <div className="coming-soon-text">COMING SOON</div>
      </div>
    </section>
  );
};

export default HeroSection;
