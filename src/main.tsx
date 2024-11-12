import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// TODO
// G functionality requirements
// Almost there with booking, might have to look at row 57
// Work on confirmation

// VG requirements
// players and shoes should match
// max 4 players per lane

// Add some animations
