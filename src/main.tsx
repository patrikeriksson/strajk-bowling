import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { BookingProvider } from "./context/BookingContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BookingProvider>
      <RouterProvider router={router} />
    </BookingProvider>
  </StrictMode>
);

// TODO
// VG requirements
// players and shoes should match
// max 4 players per lane

// Add some animations
