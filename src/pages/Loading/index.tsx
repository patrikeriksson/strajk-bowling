import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.css";

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/booking");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.main
      className="loading"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <img
        className="loading__logo"
        src="/strajk.svg"
        alt="Strajk Bowling Logo"
      />
      <h1 className="loading__title">STRAJK</h1>
      <p className="loading__subtitle">BOWLING</p>
    </motion.main>
  );
}
