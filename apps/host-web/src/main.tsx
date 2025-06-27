import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

const RemoteButton = lazy(() => import("remoteApp/button"));
const RemoteInput = lazy(() => import("remoteApp2/input"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading Remote Button...</div>}>
      <RemoteButton />
    </Suspense>
    <Suspense fallback={<div>Loading Remote Input...</div>}>
      <RemoteInput />
    </Suspense>
  </StrictMode>
);
