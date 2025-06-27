import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
const RemoteButton = lazy(() => import("remoteApp/Button"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading Remote Button...</div>}>
      <RemoteButton />
    </Suspense>
  </StrictMode>
);
