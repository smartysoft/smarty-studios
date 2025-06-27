import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Input from "./components/input";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    REMOTE2 WEB: <Input />
  </StrictMode>
);
