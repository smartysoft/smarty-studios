import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Button from "./components/button";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    REMOTE WEB: <Button />
  </StrictMode>
);
