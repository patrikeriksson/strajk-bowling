import "./index.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const menuVariants = {
    hidden: {
      x: "-100%",
      transition: {
        ease: "easeInOut",
      },
    },
    visible: {
      x: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.ul
              className="menu__list"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.li className="menu__item" variants={itemVariants}>
                <NavLink to="/booking" onClick={toggleMenu}>
                  BOOKING
                </NavLink>
              </motion.li>

              <motion.li className="menu__item" variants={itemVariants}>
                <NavLink to="/confirmation" onClick={toggleMenu}>
                  CONFIRMATION
                </NavLink>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
