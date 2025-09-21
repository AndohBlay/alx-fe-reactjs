import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        padding: "15px",
        marginTop: "30px",
      }}
    >
      <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
