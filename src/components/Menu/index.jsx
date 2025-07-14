import React, { useState } from "react";
import "./index.css"; 

const menuLinks = [
  { label: "BLOG", href: "#" },
  { label: "CONTACTS", href: "#" },
];

export default function Menu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="menu">
      <img src="https://candyboards.com.ua/wp-content/themes/candy-boards/assets/images/Logo.svg" alt="Logo" className="menu__logo" />
      <nav className="menu__links">
        {menuLinks.map((link) => (
          <a key={link.label} href={link.href} className="menu__link">{link.label}</a>
        ))}
      </nav>
      <button
        className="menu__burger"
        onClick={() => setIsMobileMenuOpen((open) => !open)}
      >
        <span className="menu__burger-line" />
        <span className="menu__burger-line" />
        <span className="menu__burger-line" />
      </button>
      {isMobileMenuOpen && (
        <div className="menu__mobile">
          <button
            className="menu__close"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ×
          </button>
          {menuLinks.map((link) => (
            <a key={link.label} href={link.href} className="menu__mobile-link">{link.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}