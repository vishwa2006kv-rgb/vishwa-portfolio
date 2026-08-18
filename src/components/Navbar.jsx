import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-inner">

        {/* LOGO */}
        <a href="#home" className="navbar-logo">
          VK
        </a>


        {/* DESKTOP MENU */}
        <div className="navbar-links">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
            >
              {link.name}
            </a>
          ))}

        </div>


        {/* MOBILE BUTTON */}
        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={handleClick}
          >
            {link.name}

            <span>↗</span>
          </a>
        ))}

      </div>

    </nav>
  );
}

export default Navbar;