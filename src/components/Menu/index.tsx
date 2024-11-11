import "./index.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav>
      <svg
        className="hamburger"
        onClick={toggleMenu}
        width="52"
        height="46"
        viewBox="0 0 52 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="52" height="46" rx="4" fill="#EC315A" fillOpacity="0.12" />
        <rect x="12" y="12" width="28" height="2" rx="1" fill="#EC315A" />
        <rect x="12" y="22" width="22" height="2" rx="1" fill="#EC315A" />
        <rect x="12" y="32" width="15" height="2" rx="1" fill="#EC315A" />
      </svg>
      {isOpen && (
        <div className="menu">
          <ul className="menu__list">
            <NavLink to="/booking" onClick={toggleMenu}>
              <li className="menu__item">BOOKING</li>
            </NavLink>
            <NavLink to="/confirmation" onClick={toggleMenu}>
              <li className="menu__item">CONFIRMATION</li>
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
}
