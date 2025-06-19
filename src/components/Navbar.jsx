import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerStyle = {
    position: "fixed",
    top: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
    width: "100%",
    maxWidth: "95%",
    display: "flex",
    justifyContent: "center",
  };

  const navbarStyle = {
    borderRadius: "999px",
    backgroundColor: "#F8F9FB",
    padding: "10px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    gap: "30px",
    width: "100%",
    maxWidth: "700px",
    flexWrap: "wrap",
  };

  const navItemStyle = {
    fontSize: "1rem",
    color: "#042222", // Bootstrap muted color
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  const logoStyle = {
    fontWeight: "bold",
    color: "#000",
    fontSize: "1rem",
    whiteSpace: "nowrap",
  };

  const buttonStyle = {
    borderRadius: "999px",
    backgroundColor: "#03624C",
    border: "2px solid white",
    fontWeight: "600",
    fontSize: "1rem",
    padding: "8px 18px",
    color: "#fff",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  return (
    <div style={containerStyle}>
      <div style={navbarStyle}>
        {/* Left nav items */}
        <div className="d-flex gap-4">
          <div
            style={navItemStyle}
            onClick={() => scrollToSection("case-studies")}
          >
            Blogs, Case Studies
          </div>
        </div>

        {/* Center logo */}
        <div style={logoStyle}>Logo</div>

        {/* Right CTA */}
        <button style={buttonStyle}>Schedule a Call</button>
      </div>
    </div>
  );
};

export default Navbar;
