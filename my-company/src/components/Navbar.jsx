import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <h2 style={{ margin: 0 }}>My Company</h2>
      <div>
        <Link to="/" style={{ color: "white", margin: "0 10px", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/about" style={{ color: "white", margin: "0 10px", textDecoration: "none" }}>
          About
        </Link>
        <Link to="/services" style={{ color: "white", margin: "0 10px", textDecoration: "none" }}>
          Services
        </Link>
        <Link to="/contact" style={{ color: "white", margin: "0 10px", textDecoration: "none" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
