import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { BookingProvider } from "./context/BookingContext";
import { AnimatePresence } from "framer-motion";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BookingProvider>
      <AnimatePresence mode="wait">
        <RouterProvider router={router} />
      </AnimatePresence>
    </BookingProvider>
  </StrictMode>
);

// TODO
// Add some animations:
// Button feedback
// Slide in shoes when added/removed
